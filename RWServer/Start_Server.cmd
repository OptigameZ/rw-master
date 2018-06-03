@ECHO OFF
:choice
set /P c=Would you like to lelete your sevrer cache?[Y/N]?
if /I "%c%" EQU "Y" goto :somewhere
if /I "%c%" EQU "N" goto :somewhere_else
goto :choice
:somewhere
echo "Deleting server cache"
rd /s /q "E:\RWServer\cache\"
echo -
echo RWServer
echo -
start E:\RWServer\run.cmd +exec server.cfg
exit
:somewhere_else
echo
@echo off
echo -
echo © Redwolf Roleplay
echo -
start E:\RWServer\run.cmd +exec server.cfg
exit