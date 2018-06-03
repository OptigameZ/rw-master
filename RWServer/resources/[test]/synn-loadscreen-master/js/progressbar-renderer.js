Init();

//Cache to keep track of all progress values.
//This is need for the Math.max functions (so no backwards progressbars).
var progressCache = [];

function Init()
{
    if(config.progressBarType == 0)
    {
        //Start single progressbar.
        var progressBar = document.getElementById("pb0");
        progressBar.classList.remove("hide");

        setInterval(UpdateSingle, 250);
    }
    else
    {
        //Show the progressbars we need.
        for(i = 0; i < 5; i++)
        {
            if(config.progressBars[types[i]].enabled)
            {
                var progressBar = document.getElementById("pb" + i);
                progressBar.classList.remove("hide");

                if(config.progressBarType == 2)
                {
                    progressBar.classList.add("pbCollapse");
                }
            }
        }

        //Start updating.
        setInterval(UpdateMulti, 250);
    }
}

function UpdateMulti()
{
    UpdateTotalProgress();

    //Set individual loading bars:
    for(i = 0; i < types.length; i++)
    {
        var progress =  GetTypeProgress(types[i]);
        var progressBar = document.getElementById("pb" + i);

        if(progressCache[i] != null)
        {
            progress = Math.max(progress, progressCache[i]);
        }

        if(isNaN(progress))
        {
            progress = 0;
            console.log("Woops!")
        }

        progressBar.value = progress;
        progressCache[i] = progress;
    }
}

//Update the single progressbar.
function UpdateSingle()
{
    UpdateTotalProgress();

    var progressBar = document.getElementById("pb0");
    progressBar.value = progressCache[10];

}

// Update the total percentage loaded (above the progressbar on the right).
function UpdateTotalProgress()
{
        //Set the total progress counter:
        var total = GetTotalProgress();
        var totalProgress = document.getElementById("progress-bar-value");

        if(progressCache[10] != null)
        {
            total = Math.max(total, progressCache[10]);
        }

        totalProgress.innerHTML = Math.round(total);
        progressCache[10] = total;

}
