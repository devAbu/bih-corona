<?php
$url = 'https://www.klix.ba/koronavirus-u-bih';
$html = new DOMDocument();
@$html->loadHTMLFile($url);
$xpath = new DOMXPath($html);

//example 1: for everything with an id
//$elements = $xpath->query("//*[td]");
$elements = $xpath->query("//*[@class='numbers'] | //*[@class='city']");

if (!is_null($elements)) {
    foreach ($elements as $element) {

        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}