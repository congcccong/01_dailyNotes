dir  .  /b> zzz.txt
set /p var=������ǰ׺��
echo %var%
for /f "tokens=*" %%i in (zzz.txt) do (ren "%%i" "%var%%%i")

pause

