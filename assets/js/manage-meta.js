const metadata = {
    "description": "Manage Your Accounting Needs with Your Actual Bookkeeper",
    "keyword": "yabookkeeper, bookkeepers"
};

const host = window.location; const hostname = host.hostname;
const isProduction = (hostname != '127.0.0.1' && hostname != 'localhost' && hostname != '0.0.0.0');
if (isProduction) {
    Object.keys(metadata).map(function (name) {
        var meta = document.createElement('meta');
        meta.name = name;
        meta.content = metadata[name];
        document.getElementsByTagName('head')[0].appendChild(meta);
    });
}