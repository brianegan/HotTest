# Stories for (Still need a good name)

* As a programmer
* I want a JavaScript Test Runner
* So that I can quickly and easily do unit testing for all relevant browsers

## Acceptance Criteria

### Scenario 1: Initializing a project

* Given I'm in the command line
* When a user initializes a project
* And provides a certain type of project (Jasmine, qUnit, etc)
* Then create a config.json
* And create a lib/ folder
* And create a test/ folder
* And copy the appropriate unit test folders to test/

### Scenario 2: Starting the Server

* Given I'm in a folder with a config.json
* Or    I provide a location to config.json
* When  I run the app with no commands
* Then  It should start a server at port 123

### Scenario 3: Run the server
* Given I pass the run command
* And provide and optional output type (terminal, object, html)
* When I run the app
* Then the unit tests should be run
* And the report should be returned in the appropriate format

### Scenario 4: Watch command is initiated
* Given I want to watch the files specified in the config
* When I run the app with --watch
* Then the app should start a server, and begin watching for changes to the specified files.
* And  run the tests upon each change. 
* And  return a report for each run
