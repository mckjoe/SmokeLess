import React from 'react';
import Header from './Header';
import DetailsList from './DetailsList'
import { Switch, Route } from 'react-router-dom';
import Time from './Time';
import WelcomeControl from './WelcomeControl';
import Error404 from './Error404';
import Info from './Info';
import Health from './Health';
import PostList from './PostList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterPostList: [
        {
          profilePic: "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
          name: "Joseph McKinney",
          quitDate: "April 2nd, 2017",
          body: "Congratulations everyone! You've made it this far and should be proud of yourself, keep it up!",
          key: '1'
        },
        {
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SVau-uGL427A4ED3q5ijSb_X9eKhrDmYTqthYmYrjPdb34jB",
          name: "Lisa Gallagher",
          quitDate: "February 22nd, 2013",
          body: "Looking back on my experience stopping smoking, and grateful because I couldn't have done it without all of your support.  Thanks everybody!",
          key: '2'
        },
        {
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlSwY7B-xACH1E2qMkQNaM6mjPvd66Oj-1T05aIElhuayzzrR",
          name: "Freddy Prince",
          quitDate: "August 13th, 2017",
          body: "Can't believe I made it this long! Talking to my friends when I've had cravings has been such a hugge relief for me.",
          key: '3'
        },
        {
          profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknbk4m9sJEgunq_Wg1sOOPSNFXS52q_z-l2QF3sM16Dy0KZoswg",
          name: "Johnathan Taylor",
          quitDate: "June 12th, 2018",
          body: "Didn't sleep much last night, anyone have any suggestions to help me sleep?",
          key: '4'
        }
      ],
      quitStats: [
        {
          time: "20 Min",
          benefit: "Your blood pressure, pulse rate and the temperature of your hands and feet have returned to normal."
        },
        {
          time: "8 Hours",
          benefit: "Remaining nicotine in your bloodstream has fallen to 6.25% of normal peak daily levels, a 93.75% reduction."
        },
        {
          time: "12 Hours",
          benefit: "Your blood oxygen level has increased to normal. Carbon monoxide levels have dropped to normal."
        },
        {
          time: "24 Hours",
          benefit: "Anxieties have peaked in intensity and within two weeks should return to near pre-cessation levels."
        },
        {
          time: "48 Hours",
          benefit: "Damaged nerve endings have started to regrow and your sense of smell and taste are beginning to return to normal. Cessation anger and irritability will have peaked."
        },
        {
          time: "72 Hours",
          benefit: "Your entire body will test 100% nicotine-free. Over 90% of all nicotine metabolites (the chemicals nicotine breaks down into) have passed from your body via your urine.  Symptoms of chemical withdrawal have peaked in intensity, including restlessness. Unless use cues have been avoided, the number of cue induced crave episodes experienced during any quitting day have peaked for the 'average' ex-user. Lung bronchial tubes leading to air sacs (alveoli) are beginning to relax in recovering smokers. Breathing is becoming easier and your lung's functional abilities are improving."
        },
        {
          time: "5-8 Days",
          benefit: "The 'average' ex-smoker is down to experiencing just three cue induced crave episodes per day. Although we may not be 'average' and although minutes may feel like hours when normal cessation time distortion combines with the body's panic response, it is unlikely that any single episode will last longer than 3 minutes. Keep a clock handy and time the episode to maintain an honest perspective on time."
        },
        {
          time: "10 Days",
          benefit: "The 'average' ex-user is down to encountering less than two crave episodes per day."
        },
        {
          time: "10 Days to 2 Weeks",
          benefit: "Recovery has likely progressed to the point where your addiction is no longer doing the talking. Blood circulation in your gums and teeth are now similar to that of a non-user."
        },
        {
          time: "2-4 Weeks",
          benefit: "Cessation related anger, anxiety, difficulty concentrating, impatience, insomnia, restlessness and depression have ended. If still experiencing any of these symptoms get seen and evaluated by your physician."
        },
        {
          time: "2 Weeks to 3 Months",
          benefit: "Your heart attack risk has started to drop. Your lung function has noticeably improved. If your health permits, sample your circulation and lung improvement by walking briskly, climbing stairs or running further or faster than normal."
        },
        {
          time: "21 Days",
          benefit: "The number of acetylcholine receptors, which were up-regulated in response to nicotine\'s presence in the frontal, parietal, temporal, occipital, basal ganglia, thalamus, brain stem and cerebellum regions of your brain have now substantially down-regulated. Receptor binding has returned to levels seen in the brains of non-smokers (2007 study)."
        },
        {
          time: "3 Weeks to 3 Months",
          benefit: "Your circulation has substantially improved. Walking has become easier. Your chronic cough, if any, has likely disappeared. If not, get seen by a doctor, and sooner if at all concerned, as a chronic cough can be a sign of lung cancer."
        },
        {
          time: "4 Weeks",
          benefit: "Plasma suPAR is a stable inflammatory biomarker that helps predict development of diseases ranging from diabetes to cancer in smokers. A 2016 study found that within 4 weeks of quitting smoking, with or without NRT, that suPAR levels in 48 former smokers had fallen from a baseline smoking median of 3.2 ng/ml to levels 'no longer significantly different from the never smokers values' (1.9 ng/ml)."
        },
        {
          time: "8 Weeks",
          benefit: "Insulin resistance in smokers has normalized despite average weight gain of 2.7 kg"
        },
        {
          time: "1 to 9 Months",
          benefit: "Any smoking related sinus congestion, fatigue or shortness of breath has decreased. Cilia have regrown in your trachea (windpipe) thereby increasing the ability to sweep dirt and mucus out of your lungs. Your body's overall energy has increased."
        },
        {
          time: "1 Year",
          benefit: "	Your excess risk of coronary heart disease, heart attack and stroke has dropped to less than half that of a smoker."
        },
        {
          time: "5 Years",
          benefit:"Your risk of a subarachnoid hemorrhage has declined to 59% of your risk while still smoking. If a female ex-smoker, your risk of developing diabetes is now that of a non-smoker."
        },
        {
          time: "5-15 Years",
          benefit: "Your risk of stroke has declined to that of a non-smoker."
        },
        {
          time: "10 Years",
          benefit: "Your risk of being diagnosed with lung cancer is between 30% to 50% of that for a continuing smoker. Risk of death from lung cancer has declined by almost half if you were an average smoker (one pack per day).  Risk of cancer of the mouth, throat, esophagus and pancreas have declined. Risk of developing diabetes for both men and women is now similar to that of a never-smoker."
        },
        {
          time: "13 Years",
          benefit: "The average smoker lucky enough to live to age 75 has 5.8 fewer teeth than a non-smoker. But by year 13 after quitting, your risk of smoking induced tooth loss has declined to that of a never-smoker."
        },
        {
          time: "15 Years",
          benefit: "Your risk of coronary heart disease is now that of a person who has never smoked. Your risk of pancreatic cancer has declined to that of a never-smoker (2011 study - but note a 2nd pancreatic study making an identical finding at 20 years)."
        },
        {
          time: "20 Years",
          benefit: "If a female, your excess risk of death from all smoking related causes, including lung disease and cancer, has now reduced to that of a never-smoker. Risk of pancreatic cancer has also declined to that of a never-smoker."
        }
      ],
      masterSmokerDetails: []
    };
    this.handleCreatingNewUser = this.handleCreatingNewUser.bind(this);
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleCreatingNewUser(newUser) {
    var newMasterSmokerDetails = this.state.masterSmokerDetails.slice();
    newMasterSmokerDetails.push(newUser);
    this.setState({masterSmokerDetails: newMasterSmokerDetails});
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return (
      <div className="conatainerStyles">
        <Header />
        <Switch>

          <Route exact path='/' render={()=><WelcomeControl onNewUserCreation={this.handleCreatingNewUser} />} />

          <Route path='/details' render={()=><DetailsList smokerDetails={this.state.masterSmokerDetails} />} />

          <Route path='/time' component={Time} />
          <Route path='/info' component={Info} />
          <Route path='/health' render={()=><Health quitStats={this.state.quitStats} />} />

          <Route path='/share' render={()=><PostList
             onNewPostCreation={this.handleAddingNewPostToList}
             postList = {this.state.masterPostList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
