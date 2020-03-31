<?php
$url = 'https://www.klix.ba/';
$html = new DOMDocument();
@$html->loadHTMLFile($url);
$xpath = new DOMXPath($html);


// example 3: same as above with wildcard
$elements = $xpath->query("/html/body/div[1]/div[2]/div/div[2]/a[1]/h2");
if (!is_null($elements)) {
    foreach ($elements as $element) {

        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}

$elements2 = $xpath->query("//*[@id='kat_naslovnica']/div[1]/div[2]/div/div[2]/a[2]/h2");

if (!is_null($elements2)) {
    foreach ($elements2 as $element) {

        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}

$elements3 = $xpath->query("//*[@id='kat_naslovnica']/div[1]/div[2]/div/div[2]/a[3]/h2");

if (!is_null($elements3)) {
    foreach ($elements3 as $element) {
        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}
