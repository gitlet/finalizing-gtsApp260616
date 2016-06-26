<?php

 echo 'Hello..!';
 $atservices_wsdl = "http://86.96.194.194:8002/WebServices/Webservice.asmx?op=AuthenticateUser";
 $atservices_client = new SoapClient($atservices_wsdl);

 $zone_info = $atservices_client->getZoneInfo("AuthenticateUser");

 print_r($zone_info); // review the returned object converted from SOAP response.

 echo $zone_info->DataBaseType; // this might work if it's not behind a Response object.

?>