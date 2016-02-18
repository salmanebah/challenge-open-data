#! /usr/bin/env bash
# install requires programs in the vagrant box

# install node npm grunt-cli yo generator-karma generator-angular
if which node > /dev/null
then
    echo 'skip node npm yo installation'
else
    echo 'installing node npm yo'
    cd /tmp
    wget https://nodejs.org/dist/v5.6.0/node-v5.6.0-linux-x64.tar.gz
    tar xzvf node-v5.6.0-linux-x64.tar.gz
    rm  node-v5.6.0-linux-x64.tar.gz
    mv node-v5.6.0-linux-x64/lib/* /usr/local/lib
    mv node-v5.6.0-linux-x64/bin/* /usr/local/bin
    npm install -g grunt-cli bower yo generator-karma generator-angular
fi
#install git
if which git > /dev/null
then
    echo 'skip git installation'
else
    echo 'installing git'
    apt-get install -y git
fi
   
# install java
if which java > /dev/null
then
    echo 'skip java 8 installation'
else
    echo 'installing java 8'
    apt-get install --yes python-software-properties
    add-apt-repository ppa:webupd8team/java
    apt-get update -qq
    echo debconf shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
    echo debconf shared/accepted-oracle-license-v1-1 seen true | /usr/bin/debconf-set-selections
    apt-get install --yes oracle-java8-installer
    yes "" | apt-get -f install
fi

# install mongodb-server
if which mongodb-server > /dev/null
then 
    echo 'skip mongodb installation'
else
    echo 'installing mongodb'
    apt-get install -y mongodb-server
fi
