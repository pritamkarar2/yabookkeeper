const metaList = {
    "description": "Manage Your Accounting Needs with Your Actual Bookkeeper",
    "keyword": "yabookkeeper, bookkeepers"
};

const host = window.location; const hostname = host.hostname;
const isProduction = (hostname != '127.0.0.1' && hostname != 'localhost' && hostname != '0.0.0.0');
var meta_data = '';
if (!isProduction) {
    Object.keys(metaList).map(function (name) {
        var meta = `<meta name="` + name + `" content="` + metaList[name] + `">`;
        meta_data += meta;
    });
}