
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/thinura2003/Bixby-Mowl /root/Bixby
WORKDIR /root/Bixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --ignore-engines
RUN git clone https://github.com/thinura2003/media

CMD ["node", "bot.js"]


