RUN git clone -b v0.9.x https://github.com/NodeBB/NodeBB nodebb
WORKDIR /opt/nodebb
RUN npm install --production
ADD execute-nodebb.sh ./execute-nodebb.sh
EXPOSE 4567
CMD ./execute-nodebb.sh