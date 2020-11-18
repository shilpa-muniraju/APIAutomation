package serviceutils;

import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import com.jayway.jsonpath.JsonPath;

public class ResponseParseUtils {	

	static Logger log = Logger.getLogger("ResponseParseUtils");

	/*********************This method returns status code in integer type from api response************************************/
	public static int getStatusCode() {	
		int statusCode = 0;
		try {
			statusCode = RequestRunner.serviceResponse.getStatusCode();
			log.info("Successfully retrieved the response code from API response");
		}
		catch(NullPointerException e) {
			log.error("Exception while retrieving response status code : "+e.getMessage());
			e.printStackTrace();
		}
		return statusCode;
	}	

	/*********************This method returns list of Json objects for given Jsonpath/attribute********************************/
	public static List<Map<?,?>> getListOfOjectsFromAPIResponse() {		
		List<Map<?,?>> jsonObjects = null;
		try {
			jsonObjects = JsonPath.read(RequestRunner.serviceResponse.asString(), "$");		
		}
		catch(Exception e) {
			log.error("Exception while parsing the response : "+e.getMessage());			
			e.printStackTrace();
		}
		return jsonObjects;
	}
}