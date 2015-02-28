sogouExplorer.extension.onMessage.addListener(function(request, sender) {
	console.log(request.action);

    if (request.action == 'reload') {
        sogouExplorer.tabs.reload(sender.tab.id, {
            bypassCache: true
        });
    } 
});

