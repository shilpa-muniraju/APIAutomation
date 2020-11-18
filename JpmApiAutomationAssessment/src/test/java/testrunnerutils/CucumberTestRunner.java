package testrunnerutils;

import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		snippets = SnippetType.CAMELCASE,
		plugin = {"html:target/cucumberexecreport",
		"json:target/cucumber.json"}, 
		features = ".", 
		glue = {"stepdefinitions" },
		monochrome = true,
		dryRun = false, 
		tags = {"@apiserviceval"}
		)


public class CucumberTestRunner {
	static Logger log = Logger.getLogger("CucumberTestRunner");

	@BeforeClass
	public static void startUpTasks() {
		log.info("------------------------------------Test Execution is initiated----------------------------------------------");	
	}


	@AfterClass
	public static void endUpTasks() {
		log.info("------------------------------------Test Execution is ended--------------------------------------------------");
	}

}