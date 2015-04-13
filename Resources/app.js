Ti.UI.backgroundColor = 'Black';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
	image: 'linkedinphoto.jpg',
	top: 0,
	height: '50%',
	width: '90%'
});

Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({
	title:'Biography',
	backgroundColor: '#9F9D9D'
});
var tab1 = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Biography',
	window:win1
});

var label = Titanium.UI.createLabel({
	color:'#000000',
	text:'Andrew Yenney\n\nHuman Resource Management\nStudent at the University of Idaho\n\nCell:208-669-0158\nEmail:yenn4251@vandals.uidaho.edu',
	font:{fontSize:15,fontFamily:'Calibri'},
	textAlign:'center',
	width:'90%',
	top:'55%'
});

win1.add(label);

var win2 = Titanium.UI.createWindow({
	title:'Detailed Info',
	backgroundColor: '#B18E5F'
});
var tab2 = Titanium.UI.createTab({
	icon:'KS_nav_views.png',
	title:'Detailed Info',
	window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#000000',
	text:'Born and raised in Troy, Idaho\nCurrently pursuing a Degree in Human Resource Management\n\nCurrent Employer:Sport Town\n\nSummary of Skills:\nCooperative Team Member\nVery Quick Learner\nAttention to Detail\nEnthusiastic and Organized\nExtremely Personable\nGood Communicator\nHard Worker',
	font:{fontSize:20,fontFamily:'Calibri'},
	textAlign:'center',
	width:'90%'
});

win2.add(label2);
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
win1.add(image);
