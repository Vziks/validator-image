FROM node:14.15
LABEL Anton Prokhorov <vziks@live.ru>
RUN npm install -g amphtml-validator
RUN npm install -g feed-validator
COPY type-json.js /usr/local/lib/node_modules/feed-validator/reporter/
CMD [""]