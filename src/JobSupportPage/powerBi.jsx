
import React, { useEffect, useRef } from 'react';
import { PowerBIEmbed } from 'powerbi-client';
import {models} from 'powerbi-client';

const PowerBi = () => {


return(
    <div className="admin-dashboard">
		  {/* Header */}
		  
<PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: '1f9aba5b-f44a-4126-ba2b-215c8f934aa9',
		embedUrl: "https://app.powerbi.com/reportEmbed?reportId=1f9aba5b-f44a-4126-ba2b-215c8f934aa9&groupId=ef57c8a6-e497-41cb-95f0-1180f1eb826a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
		accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjRiMjMzZjgtZDIzNy00YTZhLWJhZmMtNWU3YmU3YmJlNzlkLyIsImlhdCI6MTc0ODI2MDE0MiwibmJmIjoxNzQ4MjYwMTQyLCJleHAiOjE3NDgyNjQ2OTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWF…'

,
		tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "reportClass" }

	getEmbeddedComponent = { (embeddedReport) => {
		window.Report = embeddedReport;
	}}
/>
</div>
)
}

export default PowerBi;


