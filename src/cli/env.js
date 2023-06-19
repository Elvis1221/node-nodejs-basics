const parseEnv = () => {
    const prefix = 'RSS_';
    console.log('@#@#@#@', process.env);
    const rssVariables = Object.keys(process.env)
        .filter(key => key.startsWith(prefix))
        .reduce((obj, key) => {
            obj[key] = process.env[key];
            return obj;
        }, {});

    console.log('rssVariables', rssVariables);

    const rssVariablesString = Object.entries(rssVariables)
        .map(([key, value]) => `RSS_${key.slice(prefix.length)}=${value})`
            .join('; '));

    console.log(rssVariablesString);
};

parseEnv();