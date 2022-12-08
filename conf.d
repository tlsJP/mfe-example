server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    location / {
        add_header Access-Control-Allow-Origin *;
    }

    #access_log  /var/log/nginx/host.access.log  main;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}