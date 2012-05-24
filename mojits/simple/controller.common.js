/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('simple', function(Y, NAME) {

    Y.mojito.controllers[NAME] = {

        index: function(ac) {

            var color = ac.params.url('color');

            if (color) {
                ac.http.redirect(ac.url.make('color', 'index', {color: color}));
                return;
            }

            color = ac.params.merged('color');

            ac.assets.addCss('./index.css');

            ac.done({hasColor: true, color: color});
        }

    };

}, '0.0.1', {requires: ['mojito']});
