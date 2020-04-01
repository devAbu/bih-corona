<?php
$url = 'https://www.klix.ba/koronavirus-u-bih';
$html = new DOMDocument();
@$html->loadHTMLFile($url);
$xpath = new DOMXPath($html);

//example 1: for everything with an id
//$elements = $xpath->query("//*[td]");
$elements = $xpath->query("//*[@class='numbers'] | //*[@class='city']");
// example 2: for node data in a selected id
//$elements = $xpath->query("/html/body/div[class='yourTagIdHere']");


// example 3: same as above with wildcard
//$elements = $xpath->query("/html/body/div[1]/div[1]/div/div[2]/table/tbody/tr[2]/td/div[3]/b");
if (!is_null($elements)) {
    foreach ($elements as $element) {

        $nodes = $element->childNodes;
        foreach ($nodes as $node) {
            echo $node->nodeValue . "\n";
        }
    }
}
