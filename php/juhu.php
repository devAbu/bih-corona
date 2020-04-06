<?php
$url = 'https://www.worldometers.info/coronavirus/';
$html = new DOMDocument();
@$html->loadHTMLFile($url);
$xpath = new DOMXPath($html);

$elements = $xpath->query("//*[@id='main_table_countries_today']/tbody[1]/tr[70]");
if (!is_null($elements)) {
    foreach ($elements as $element) {

        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}