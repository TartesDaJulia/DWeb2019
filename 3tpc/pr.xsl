<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="/">
            <html>
                <head>
                    <title>
                        Project Record
                    </title>
                    <meta charset="UTF-8"/>
                    <link rel="stylesheet" href="style.css" type="text/css"/>
                    <style>
                        th{
                        text-align:left;
                        }            
                        td{
                        text-align:left;
                        }    
                    </style>
                </head>
                <body>
                    <h1>Project Record</h1>
                    <ul>
                        <xsl:apply-templates/>
                    </ul>
                </body>
            </html>
    </xsl:template>
    
    <xsl:template match="meta">
        <table>
            <xsl:apply-templates/>
        </table>
    </xsl:template>
    
    <xsl:template match="abstract">
        <hr/>
        <h2>Abstract</h2>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="keyname"> 
        <tr>
            <th>Keyname:</th>
            <td  ><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="title">
        <tr>
            <th>Title:</th>
            <td  ><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="subtitle">
        <tr>
            <th>Subitle:</th>
            <td  ><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="bdate">
        <tr>
            <th>Begin date:</th>
            <td  ><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="edate">
        <tr>
            <th>End date:</th>
            <td  ><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="supervisor">
        <tr>
            <th>Supervisor:</th>
            <td  >
                <p><xsl:value-of select="name"/></p>
                <p><xsl:value-of select="email"/></p>
                <p><xsl:value-of select="homepage"/></p>
            </td>
        </tr>
    </xsl:template>
    
    <xsl:template match="workteam">
        <tr>
            <th><b>Workteam:</b></th>
            <td  >
                <ul><xsl:apply-templates/></ul>
            </td>
        </tr>
    </xsl:template>
        
    <xsl:template match="member">
        <li>
            <p><xsl:value-of select="identifier"/></p>
            <p><xsl:value-of select="name"/></p>
            <p><xsl:value-of select="email"/></p>
            <p><xsl:apply-templates select="photo"/></p>
        </li>
    </xsl:template>
    
    <xsl:template match="photo">
        <img src="{@path}" alt="{@path}" width="250"/>
    </xsl:template> 
    
    <xsl:template match="deliverables">
        <h3>Deliverables:</h3>
        <ul>
            <xsl:apply-templates/>
        </ul>
        
    </xsl:template>
    
    <xsl:template match="deliverable">
        <li><a href="{@path}"> <xsl:value-of select="."/> </a></li>
    </xsl:template>
    
    
</xsl:stylesheet>