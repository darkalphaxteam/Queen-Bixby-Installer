FROM RIPPER-SER/bixbymowl:Servers
RUN git clone https://github.com/thinura2003/bixbymowl /root/Bixby
WORKDIR /root/Bixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/thinura2003/media
CMD ["node", "bot.js"]

