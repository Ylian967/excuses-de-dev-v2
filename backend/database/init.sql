CREATE TABLE IF NOT EXISTS excuses (
    id SERIAL PRIMARY KEY,
    http_code INTEGER UNIQUE NOT NULL,
    tag VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO excuses (http_code, tag, message) VALUES
(701, 'Inexcusable', 'Meh'),
(702, 'Inexcusable', 'Emacs'),
(703, 'Inexcusable', 'Explosion'),
(704, 'Inexcusable', 'Goto Fail'),
(705, 'Inexcusable', 'I wrote the code and missed the necessary validation by an oversight'),
(725, 'Edge Cases', 'It works on my machine'),
(730, 'Fucking', 'Fucking npm')
