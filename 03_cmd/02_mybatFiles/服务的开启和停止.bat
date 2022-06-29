
goto remarkend
    echo hi
    net stop Apache
    net start Apache
    sc config Apache start=demand

    net stop MySQL

    sc config 服务名 start=demand     //手动
    sc config 服务名 start=auto       //自动
    sc config 服务名 start=disabled //禁用
    sc start 服务名　　开启服务
    sc stop 服务名　　停止服务
    sc query 服务名　　查看服务状态
    sc  delete  服务名    删除服务
    sc qc 服务名      查看服务的配置信息
:remarkend

echo hi
sc config MySQL start=demand
::net stop MySQL

pause