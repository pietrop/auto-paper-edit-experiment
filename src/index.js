require('dotenv').config();
const fs = require('fs');
const path = require('path');
const assemblyai = require('@pietrop/assemblyai');
const ApiKey = process.env.ASSEMBLYAI_API_KEY;

// const filePath = __dirname + '/example.mp3'; // some path to a local file, in .gitignore
// const INTERVIEW_NAME = 'soleio_interview';
// const INTERVIEW_NAME = 'nathaniel_interview';
// const INTERVIEW_NAME = 'naomi_interview';
const INTERVIEW_NAME = 'rosen_interview';
// const audioUrl = 'https://digital-paper-edit-demo.s3.eu-west-2.amazonaws.com/PBS-Frontline/The+Facebook+Dilemma+-+interviews/The+Facebook+Dilemma+-+Soleio+Cuervo-OIAUfZBd_7w.mp4';
// const audioUrl = 'https://digital-paper-edit-demo.s3.eu-west-2.amazonaws.com/PBS-Frontline/The+Facebook+Dilemma+-+interviews/The+Facebook+Dilemma+-+Nathaniel+Gleicher-F0ykdaOck_M.mp4';
// const audioUrl = 'https://digital-paper-edit-demo.s3.eu-west-2.amazonaws.com/PBS-Frontline/The+Facebook+Dilemma+-+interviews/The+Facebook+Dilemma+-+Naomi+Gleit-l-Ivr6kq6fk.mp4';
const audioUrl =
  'https://digital-paper-edit-demo.s3.eu-west-2.amazonaws.com/PBS-Frontline/The+Facebook+Dilemma+-+interviews/The+Facebook+Dilemma+-+Guy+Rosen-4sGvc84tNik.mp4';

async function upload() {
  try {
    const response = await assemblyai({
      ApiKey,
      //   filePath,
      audioUrl,
      languageModel: 'assemblyai_media',
      acousticModel: 'assemblyai_default',
      autoHighlights: true,
      iabCategories: true,
    });
    console.log('response', response);
    fs.writeFileSync(
      path.join(process.cwd(), 'tmp', `${INTERVIEW_NAME}.json`),
      JSON.stringify(response, null, 2)
    );
  } catch (e) {
    // Do some error handling here
    console.log('error in example usage:: ', e);
  }
}

upload();
