dir  .  /b> zzz.txt
set /p var=ÇëÊäÈëÇ°×ºÃû
echo %var%
for /f "tokens=*" %%i in (zzz.txt) do (ren "%%i" "%var%%%i")

pause

