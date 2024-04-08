import React, { Component } from 'react'
import * as jose from 'jose'

class Metabase extends Component {
	render() {

    const secret = new TextEncoder().encode(
      '64a91776f4fd0bcca5338e3519be515adef7d5cb1d3582f3befa398abe9e248d',
    )
    const alg = 'HS256'

    const payload = {
			resource: { dashboard: 1 },
      params: {},
      exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
		}
    
   /*  const token = new jose.SignJWT({ 'urn:example:claim': true })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
      .set
      .sign(secret) */
   
    
    //console.log(token)

		const mbSiteUrl = "https://metabase.dataleadsb2b.com.br"
		//const mbSecretKey = "64a91776f4fd0bcca5338e3519be515adef7d5cb1d3582f3befa398abe9e248d"
	
		//const token = jose.SignJWT(payload, mbSecretKey) //jwt.sign(payload, METABASE_SECRET_KEY);
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ1MjEyNTEsInJlc291cmNlIjp7ImRhc2hib2FyZCI6MX0sInBhcmFtcyI6e319.zQLhRr0jvLYye9dcDwx0GOcv5giYWWBrlQXOjHhp9NE";
		const iframeUrl = mbSiteUrl+"/embed/dashboard/" + token + "#bordered=true&titled=true";


		return <iframe src={iframeUrl} title='Metabase' style={{ border: 'none', width: '1100px', height: '900px' }} />
	}
}

export default Metabase