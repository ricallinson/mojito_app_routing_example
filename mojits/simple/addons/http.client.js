
YUI.add('simple_addon_http_client', function(Y, NAME) {

    function Addon(command, adapter, ac) {
        // nothing here
    }

    Addon.prototype = {

        namespace: 'http',

        /*
         * Hack to work around HTTP redirect
         */
        redirect: function(url) {
            
            var link = Y.Node.create('<a>').set('href', url);

            Y.one('body').append(link);

            link.simulate('click');

            /*
             * Important:
             * 
             * The callback has not been stopped!
             * Somehow ac.done() has to be cancelled
             * to stop memory leaks.
             */
        }

    };

    Y.mojito.addons.ac.http = Addon;

}, '0.1.0', {requires: ['mojito', 'node-event-simulate']});
