FROM ubuntu:14.04
MAINTAINER rocla

# install tools and dependencies
RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
        gcc \
    # add-apt-repository
    software-properties-common

# rocksdb ppas. then update ppas
RUN add-apt-repository "deb http://ppa.launchpad.net/giskou/librocksdb/ubuntu trusty main" && \
    apt-get update && \
    apt-get install -y --force-yes librocksdb

# install multirust
RUN curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh -s -- --yes

# install nightly and make it default
RUN multirust update nightly && multirust default nightly

# export rust LIBRARY_PATH
ENV LIBRARY_PATH /usr/local/lib

# show backtraces
ENV RUST_BACKTRACE 1

# build parity
RUN git clone https://github.com/ethcore/parity && \
    cd parity && \
    cargo install --features rpc



# FROM ubuntu:14.04
# above == ubuntu:15.10
# FROM ubuntu:wily
# MAINTAINER rocla
#
# ENV DEBIAN_FRONTEND noninteractive
#
# # install tools and dependencies
# RUN apt-get update && \
#   apt-get install -y curl apt-utils git
#
# RUN curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh -s -- --yes
#
# RUN git clone https://github.com/ethcore/parity.git && cd parity
# RUN cargo run --release

# # install tools and dependencies
# RUN apt-get update && \
#   apt-get install -y \
#     curl \
#     git \
#     gcc \
#     software-properties-common # add-apt-repository
#
# # add key for launchpad
# RUN gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv 29226849E7E01756 && \
#   gpg --export --armor 29226849E7E01756 | apt-key add -
# # rocksdb ppas. then update ppas
# RUN add-apt-repository "deb http://ppa.launchpad.net/giskou/librocksdb/ubuntu trusty main" && \
#   apt-get update && \
#   apt-get install -y --force-yes librocksdb
#
# # install multirust
# RUN curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh -s -- --yes
#
# # install nightly and make it default
# RUN multirust update nightly && multirust default nightly
#
# # export rust LIBRARY_PATH
# ENV LIBRARY_PATH="/usr/local/lib"
#
# # show backtraces
# ENV RUST_BACKTRACE=1
#
# # build parity
# RUN git clone https://github.com/ethcore/parity && \
#     cd parity && \
#     cargo install --features rpc

# # update / upgrade
# RUN apt-get update && \
#  apt-get upgrade -q -y && \
#  apt-get dist-upgrade -q -y && \
#  apt-get install -q -y software-properties-common && \
#  add-apt-repository ppa:ethereum/ethereum-qt && \
#  add-apt-repository ppa:ethereum/ethereum && \
#  add-apt-repository ppa:ethereum/ethereum-dev && \
#  add-apt-repository "deb http://ppa.launchpad.net/giskou/librocksdb/ubuntu trusty main" && \
#  apt-get update && \
#  apt-get install -q -y --force-yes curl git gcc wget unzip librocksdb && \
#  apt-get install -q -y geth && \
#  apt-get install -q -y cpp-ethereum && \
#  apt-get remove --purge -y perl perl-modules && \
#  apt-get remove --purge -y python2.7 python3 && \
#  apt-get autoremove -y && \
#  apt-get clean
#
# # Create our folders used for the Volumes
# RUN mkdir -p /ethdata/ipc && \
#  mkdir -p /ethdata/datadir && \
#  mkdir -p /ethdata/ethash && \
#  rm -rf ~/.ethash && \
#  ln -s /ethdata/ethash ~/.ethash
#
# # install multirust
# RUN curl -sf https://raw.githubusercontent.com/brson/multirust/master/blastoff.sh | sh -s -- --yes
#
# # install nightly and make it default
# RUN multirust update nightly && multirust default nightly
#
#
# COPY ./start.sh /ethdata/
#
# VOLUME /ethdata/datadir
# # VOLUME /ethdata/ethash
# # DAG volume disabled due to issues with ethash: https://github.com/ethereum/go-ethereum/issues/1572
#
# # Nothing to expose in this container, it mines all alone.
# # EXPOSE 8545
# # EXPOSE 30303
#
# # Setting default ENV
# # It's my testnet address.
# ENV THREADS=4
# ENV ETHERBASE="0x460e4a6063ad089AC6b01179a3FE85b798B019d3"
# ENV EXTRADATA="docker:rocla/ethereum-testnet-miner"
#
# # export rust LIBRARY_PATH
# ENV LIBRARY_PATH="/usr/local/lib"
# # show backtraces
# ENV RUST_BACKTRACE=1
#
# WORKDIR /ethdata/datadir
#
# # build parity
# RUN git clone https://github.com/ethcore/parity && \
#   cd parity && \
#   cargo install --features rpc
#
# CMD ["/ethdata/start.sh", "/bin/sh"]
