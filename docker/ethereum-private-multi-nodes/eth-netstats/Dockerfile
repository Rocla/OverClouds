FROM node:0.12

RUN apt-get update &&\
    apt-get install -y curl git-core tcpdump strace ltrace net-tools iputils-ping &&\
    apt-get update &&

RUN git clone https://github.com/cubedro/eth-netstats
RUN cd /eth-netstats && npm install
RUN cd /eth-netstats && npm install -g grunt-cli
RUN cd /eth-netstats && grunt

WORKDIR /eth-netstats

EXPOSE 3000

CMD ["npm", "start"]
