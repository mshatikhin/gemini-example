const urls = [ "/", "/products", "/support" ];
urls.forEach((url, i) =>
    gemini.suite(`suite-${i}`, suite =>
        suite.setUrl(url)
             .setCaptureElements("#pageWrapper")
             .capture('plain')
    )
)