const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SibApiV3Sdk = require('@sendinblue/client');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const brevo = new SibApiV3Sdk.TransactionalEmailsApi();
  brevo.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

  try {
    await brevo.sendTransacEmail({
      sender: { email: email, name: name },
      to: [{ email: process.env.CLIENT_EMAIL }],
      subject: 'New Enquiry Form Submission',
      htmlContent:  `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en-US">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]>
<xml><w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word"><w:DontUseAdvancedTypographyReadingMail/></w:WordDocument>
<o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml>
<![endif]--><!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		.row-3 .column-1 .block-1 .button:hover {
			background-color: #000000 !important;
			border-bottom: 0 solid transparent !important;
			border-left: 0 solid transparent !important;
			border-right: 0px solid transparent !important;
			border-top: 0 solid transparent !important;
			color: #ffffff !important;
		}

		@media (max-width:700px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-2 .column-1 .block-1.divider_block td.pad {
				padding: 10px 0 !important;
			}

			.row-2 .column-1 .block-1.divider_block .alignment table {
				display: inline-table;
			}

			.row-2 .row-content {
				padding: 0 30px !important;
			}

			.row-1 .column-1 {
				padding: 60px 30px 4px !important;
			}

			.row-2 .column-1 {
				padding: 0 !important;
			}

			.row-3 .column-1 {
				padding: 20px 20px 5px 2px !important;
			}
		}
	</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]-->
</head>

<body class="body" style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f1ed; color: #000000; border-radius: 20px 20px 0 0; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 4px; padding-left: 60px; padding-right: 60px; padding-top: 60px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:20px;">
																<div style="color:#f65c03;direction:ltr;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0;">Cescift - New Enquiry Alert!</p>
																</div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f1ed; color: #000000; border-radius: 0; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-left: 60px; padding-right: 60px; padding-top: 5px; vertical-align: top;">
													<table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-top:10px;">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #000000;"><span style="word-break: break-word;">&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="table_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; width: 100%; table-layout: fixed; direction: ltr; background-color: transparent; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; color: #101112; text-align: left; letter-spacing: 0px;" width="100%">
																	<tbody style="vertical-align: top; font-size: 16px; line-height: 1.2; mso-line-height-alt: 19px;">
																		<tr>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Name</strong></td>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">{name}</td>
																		</tr>
																		<tr>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Email</strong></td>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">{email}</td>
																		</tr>
																		<tr>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Phone No</strong></td>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">{phone}</td>
																		</tr>
																		<tr>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Message</strong></td>
																			<td width="50%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">{message}</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f1ed; color: #000000; border-radius: 0 0 20px 20px; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 60px; padding-right: 60px; padding-top: 30px; vertical-align: top;">
													<table class="button_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;">
																<div class="alignment" align="center"><a href="tel:${phone}" target="_blank" style="color:#ffffff;text-decoration:none;"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"  href="tel:9747770467"  style="height:42px;width:187px;v-text-anchor:middle;" arcsize="72%" fillcolor="#f65c03">
<v:stroke dashstyle="Solid" weight="0px" color="#f65c03"/>
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:16px">
<![endif]--><span class="button" style="background-color: #f65c03; border-bottom: 0px solid transparent; border-left: 0px solid transparent; border-radius: 30px; border-right: 0px solid transparent; border-top: 0px solid transparent; color: #ffffff; display: inline-block; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 700; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 30px; padding-right: 30px; text-align: center; width: auto; word-break: keep-all; letter-spacing: 1px;"><span style="word-break: break-word; line-height: 32px;">Contact Client</span></span><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a></div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-2" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>
    `
    });
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
