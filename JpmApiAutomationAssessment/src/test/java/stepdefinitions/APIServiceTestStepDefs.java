package stepdefinitions;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import reusables.ConfigUtils;
import serviceutils.RequestRunner;
import serviceutils.ResponseParseUtils;


public class APIServiceTestStepDefs {
	static Logger log = Logger.getLogger("APIServiceTestStepDefs");
	String serviceURI;


	@Given("^I setup the required URI to run (posts|comments|users) service$") 
	public void setupTheRequiredURIToRunGivenService(String resource) {
		String baseUrl = ConfigUtils.retrieveValueForGivenKey("baseurl").toString();		
		String apiEndPoint = ConfigUtils.retrieveValueForGivenKey(resource).toString();
		serviceURI = baseUrl+apiEndPoint;
		log.info("API URI is '"+serviceURI+"'");
	}


	@When("^I send the (posts|comments|users) api service request with given input parameters \"([^\"]*)\"$")
	public void sendTheGivenApiServiceRequestUsingRequiredParameters(String resourceName,String parameters) {	
		String[] parameterList = parameters.split(",");
		Map<String, String> paramList = new HashMap<>();
		for(String param : parameterList) {
			paramList.put(param.split("-")[0].trim(), param.split("-")[1].trim());
		}

		RequestRunner.sendGetRequestWithGivenParams(null, serviceURI, paramList);
		log.info("Sent API Service Request for '"+serviceURI+ "' successfully");
	}

	@Then("^I validate the (posts|comments|users) service response code \"([^\"]*)\"$")
	public void validateTheApiServiceResponseCode(String resourceName, String statusCd) {
		int respStatus = ResponseParseUtils.getStatusCode();
		log.info("The '"+resourceName+ "' API Service has ran and returned '"+respStatus+"' response status code");
		Assert.assertEquals(statusCd,String.valueOf(respStatus));
	}


	@Then("^I validate the (posts|comments|users) api service returns appropriate number of (posts|comments|users) from system \"([^\"]*)\"$")
	public void validateTheApiServiceReturnsAppropriateNumberOfRecords(String resourceName, String records, String expectedNumOfObjs) {
		String actualObjectCount = String.valueOf(ResponseParseUtils.getListOfOjectsFromAPIResponse().size());
		Assert.assertEquals(actualObjectCount, expectedNumOfObjs);
		log.info("The '"+resourceName+"' response returned appropriate '"+resourceName+"' objects as expected");
	}


	@Then("^I validate (posts|comments|users) api returns response with appropriate details \"([^\"]*)\"$")
	public void validateApiServiceReturnsAppropriateDetails(String resourceName, String params) {
		String[] paramList = params.split(",");
		List<Map<?, ?>> respObjsList = ResponseParseUtils.getListOfOjectsFromAPIResponse();
		boolean validationFailed = false;

		for(int i=0;i<paramList.length;i++) {
			for(int j=0;j<respObjsList.size();j++) {				
				Map<?,?> respObj = respObjsList.get(j);
				String paramName = paramList[i].split("-")[0].trim();				
				String value = paramList[i].split("-")[1].trim();		
				if(!value.equalsIgnoreCase(respObj.get(paramName).toString())) {
					log.info("Failed param/value are "+paramName+"--"+value);
					validationFailed = true;
					break;
				}
			}
		}			

		Assert.assertTrue(!validationFailed);
		log.info("The '"+resourceName+"' response returned with appropriate details");
	}

	@Then("^I validate (posts|comments|users) api response includes given attributes$")
	public void validateApiResponseIncludesGivenAttributes(String resource, DataTable attributes) {
		List<String> attributesList = attributes.transpose().asList(String.class);
		Map<?,?> postObject = ResponseParseUtils.getListOfOjectsFromAPIResponse().get(0);       
		boolean attributeNotFound = false;
		for(String key : attributesList) {
			if(!postObject.containsKey(key)) {
				log.info("Given attribute '"+key+"' is not found in '"+resource+"' reponse");
				attributeNotFound = true;
				break;
			}
		}
		Assert.assertTrue(!attributeNotFound);
		log.info("Input attributes are present in response");
	}
}
