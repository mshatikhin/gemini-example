gemini.suite("test", (suite) => {
    suite.setUrl("/")
        .setCaptureElements("#main")
        .capture("plain");
});

