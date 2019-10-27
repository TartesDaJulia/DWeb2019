<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    <xsl:template match="doc">
        <html>
            <head>
                <title> Arquivo sonoro </title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1>Titulo: <xsl:value-of select="tit"/></h1>
                <h2>Músico: <xsl:value-of select="musico"/> </h2>
                <h4>Prov: <xsl:value-of select="prov"/> </h4>
                <h4>Local: <xsl:value-of select="local"/> </h4>
                <ul>
                    <li>Ficheiro: <xsl:value-of select="file"/> </li>
                    <li>Duração: <xsl:value-of select="duracao"/> </li>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>