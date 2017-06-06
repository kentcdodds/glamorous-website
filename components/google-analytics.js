import React from 'react'
import {oneLineTrim} from 'common-tags'
import InlineScript from './inline-script'

export default GoogleAnalytics

function GoogleAnalytics() {
  return (
    <div>
      <InlineScript fn={runScript} />
      <script async src="//www.google-analytics.com/analytics.js" />
      <script
        async
        src={oneLineTrim`
          https://cdn.rawgit.com/
          googleanalytics/
          autotrack/0.5.0/autotrack.js
        `}
      />
    </div>
  )
}

function runScript() {
  /* eslint-disable */
  window.ga =
    window.ga ||
    function() {
      (ga.q = ga.q || []).push(arguments);
    };
  ga.l = +new Date();
  ga('create', 'UA-100562283-1', 'auto');
  ga('require', 'displayfeatures');
  ga('require', 'autotrack');
  ga('send', 'pageview');
  /* eslint-enable */
}
