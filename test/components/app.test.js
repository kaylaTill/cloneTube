import App from '../.././App.js'


describe('App', function () {
    var {
        Simulate,
        renderIntoDocument,
        findRenderedDOMComponentWithClass,
        scryRenderedDOMComponentsWithClass
    } = React.addons.TestUtils;

    var app;

    beforeEach(function () {
        app = renderIntoDocument(
            <App searchYouTube={() => { }} />
        );
    });

    it('should be a stateful class component', function () {
        expect(React.Component.isPrototypeOf(App)).to.be.true;
    });


    it('should render a single NavBar component', function () {
        var nav = findRenderedDOMComponentWithClass(app, 'menu');
        expect(nav).to.exist;
    });

    it('should render a single VideoDetail component', function () {
        var videoDetail = findRenderedDOMComponentWithClass(app, 'video-detail');
        expect(videoDetail).to.exist;
    });
    

    it('should render a single VideoList component', function () {
        var videoList = findRenderedDOMComponentWithClass(app, 'video-list');
        expect(videoList).to.exist;
    });

    it('should update the video player when a video entry\'s title is clicked', function () {
        // This test will only works once `App` is refactored into a stateful class component
        // because `renderIntoDocument` does not work with stateless class components
        expect(React.Component.isPrototypeOf(App)).to.be.true;

        var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-title');

        videoEntryTitleElements.forEach((videoEntryTitle) => {
            Simulate.click(videoEntryTitle);
            var detail = findRenderedDOMComponentWithClass(app, 'video-detail');
            var playerTitle = detail.querySelector('.video-detail-wrapper');

            expect(playerTitle.innerHTML).to.equal(videoEntryTitle.innerHTML);
        });
    });

    xdescribe('when rendering live data from YouTube', function () {
        var searchYouTubeStub;

        beforeEach(function () {
            searchYouTubeStub = sinon.stub();
            searchYouTubeStub.yields(window.fakeVideoData);
            app = renderIntoDocument(
                <App searchYouTube={searchYouTubeStub} />
            );
        });

        it('should call `searchYouTube` when app is initialized', function () {
            expect(searchYouTubeStub.called).to.be.true;
        });

        it('should load live data when app is initialized', function () {
            expect(searchYouTubeStub.called).to.be.true;

            var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');

            videoEntryTitleElements.forEach((videoEntryTitle, i) =>
                expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title)
            );
        });

    });
});