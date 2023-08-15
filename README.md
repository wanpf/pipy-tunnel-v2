# 1. pipy-tunnel-v2   
将 pipy-tunnel 中，external、internal 这2个独立的工程进行了合并。  

# 2. 配置文件  
## 2.1 external 使用的配置文件  
a）config.json   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配置文件中的 external 配置块、global 配置块、network 配置块。  
b）ip-list.json  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;访问者ip地址黑白名单。  
## 2.2 internal 使用的配置文件
a）config.json   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配置文件中的 internal 配置块、global 配置块。  
b）allow-list.json  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开放允许访问的上游服务地址， 比如：“172.18.100.1:8080”。  

# 3. 其他  
配置项和 pipy-tunnel 保持一致。  
