export function htmlEscape(text) {
    return text.replace(/[<>"&]/g, function(match){
        switch(match){
            case "&lt;": return "<";
            case "&gt;":return ">";
            case "&amp;":return "&";
            case "&quot;":return "\"";
        }
    });
}