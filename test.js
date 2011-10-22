var xslt = require('./build/default/node_xslt.node');

var stylesheet;
try {
    stylesheet = xslt.readXsltString("Some bullshit>>>!!!&", 32);
} catch (e) {
    if (!/Failed to parse/.test(e.message)) {
        throw e;
    }
}
try {
    var document = xslt.readXmlString("Same bullshit>>!!<&", 32);
} catch (e) {
    if (!/Failed to parse/.test(e.message)) {
        throw e;
    }
}
var document = xslt.readXmlString("<success id='25' />");
stylesheet = xslt.readXsltString('<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/">' +
'<xsl:value-of select="success/@id" />' +
'</xsl:template></xsl:stylesheet>');
var xmlString = xslt.transform(stylesheet, document,[]);
