
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/RIPPER-SER/Bixby-Mowl /root/Bixby
WORKDIR /root/Bixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/RIPPER-SER/media

CMD ["node", "bot.js"]


