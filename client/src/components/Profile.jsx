import React from "react";
import { useSelector } from "react-redux";
import { PowerBIEmbed } from "powerbi-client-react";
import models from "powerbi-client";
const Profile = () => {
  const { user, token, loading } = useSelector((state) => state);

  return (
    <div>
      {/* <h1 className="FullName">{user.fullName}</h1> */}
      {/* <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: '<Report Id>',
		embedUrl: '<Embed Url>',
		accessToken: '<Access Token>',
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
		window.report = embeddedReport ;
	}}
/> */}
      <iframe
        title="wassel"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=3d1c25a9-b720-453d-baa8-95569e9c576b&autoAuth=true&ctid=fc7d3d60-cb16-4f99-8e72-a0a12e7559df"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
	  <br />
      
    </div>
  );
};

export default Profile;
