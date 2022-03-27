CREATE TABLE [accounts] (
	[_id] Id NOT NULL,
	[confirmEmail] Boolean NOT NULL,
	[roles] String[] NOT NULL,
	[isOnline] Boolean NOT NULL,
	[status] String NOT NULL,
	[hashPassword] String NOT NULL,
	[email] String NOT NULL,
	[createdAt] DateTime NOT NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NOT NULL
);

CREATE TABLE [applications] (
	[_id] Id NULL,
	[status] String NULL,
	[createdBy] String NULL,
	[recruiter] String NULL,
	[candidate] String NULL,
	[user] String NULL,
	[jobLocation] String NULL,
	[jobDescription] String NULL,
	[jobTitle] String NULL,
	[job] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[resume] String NULL
);

CREATE TABLE [attachments] (
	[_id] Id NULL,
	[description] String NULL,
	[name] String NULL,
	[type] String NULL,
	[size] Int32 NULL,
	[uid] String NULL,
	[attachmentType] String NULL,
	[createdBy] String NULL,
	[name_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [candidates] (
	[_id] Id NULL,
	[recruiter] String NULL,
	[educations] Document[] NULL,
	[workExperiences] Document[] NULL,
	[email] String NULL,
	[phone] String NULL,
	[lastName] String NULL,
	[firstName] String NULL,
	[jobLocation] String NULL,
	[jobDescription] String NULL,
	[jobTitle] String NULL,
	[createdBy] String NULL,
	[user] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [careers] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[name] String NULL,
	[jobTitles] ObjectId[] NULL,
	[name_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[salaries] ObjectId[] NULL
);

CREATE TABLE [companies] (
	[_id] Id NULL,
	[companyWebsite] String NULL,
	[industries] String[] NULL,
	[numberOfVacancies] Int32 NULL,
	[createdBy] String NULL,
	[managedBy] String NULL,
	[SocialAccounts] Document[] NULL,
	[description] String NULL,
	[address] String NULL,
	[name] String NULL,
	[name_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[__v] Int32 NULL,
	[rates] Document[] NULL,
	[location] String NULL,
	[logoUrl] String NULL,
	[photo] String NULL,
	[logo] String NULL,
	[photos] String[] NULL
);

CREATE TABLE [companyReviews] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[helpful] Document[] NULL,
	[overallRating] Double NULL,
	[managementRating] Double NULL,
	[companyCultureRating] Double NULL,
	[benefitRating] Double NULL,
	[workRating] Double NULL,
	[careerGrowthRating] Double NULL,
	[comments] String NULL,
	[jobTitle] String NULL,
	[company] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [conversations] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[messages] String[] NULL,
	[participants] Document[] NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[applications] String[] NULL
);

CREATE TABLE [emails] (
	[_id] Id NULL,
	[html] String NULL,
	[text] String NULL,
	[subject] String NULL,
	[to] String NULL,
	[from] String NULL,
	[createdAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [events] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[jobLocation] String NULL,
	[jobDescription] String NULL,
	[jobTitle] String NULL,
	[mode] Int32 NULL,
	[attachments] String[] NULL,
	[status] String NULL,
	[interviewers] Document[] NULL,
	[candidate] Document NULL,
	[location] String NULL,
	[type] Int32 NULL,
	[date] DateTime NULL,
	[endSlot] Int32 NULL,
	[startSlot] Int32 NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[job] String NOT NULL
);

CREATE TABLE [industries] (
	[_id] Id NULL,
	[description] String NULL,
	[name] String NULL,
	[name_fuzzy] String[] NULL,
	[__v] Int32 NULL
);

CREATE TABLE [interviewPlans] (
	[_id] Id NULL,
	[isComplete] Boolean NULL,
	[recruiterInfo] Document NULL,
	[jobSeekerInfo] Document NULL,
	[application] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [interviewReviews] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[interviewQuestion] String NULL,
	[interviewDifficulty] String NULL,
	[description] String NULL,
	[jobTitle] String NULL,
	[companyId] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [jobAlerts] (
	[_id] Id NULL,
	[users] String[] NULL,
	[location] String NULL,
	[type] String NULL,
	[keyword] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [jobs] (
	[_id] Id NULL,
	[maxSalary] Int32 NULL,
	[minSalary] Int32 NULL,
	[location] String NULL,
	[description] String NULL,
	[title] String NULL,
	[company] String NULL,
	[createdBy] String NULL,
	[title_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[__v] Int32 NULL,
	[languages] String NULL,
	[remains] Int32 NULL,
	[vacancies] Int32 NULL,
	[currency] String NULL,
	[industry] String NULL,
	[insurance] String NULL,
	[matchStatus] String NULL,
	[plusBonus] Boolean NULL,
	[responsibilities] String NULL,
	[sendMail] Boolean NULL,
	[skillSet] String[] NULL,
	[status] String NULL,
	[targetDate] DateTime NULL,
	[type] String NULL,
	[updatedAt] DateTime NULL,
	[yearsOfExperience] Int32 NULL,
	[archived] Boolean NULL,
	[views] Int32 NULL
);

CREATE TABLE [jobTitles] (
	[_id] Id NULL,
	[description] String NULL,
	[name] String NULL,
	[name_fuzzy] String[] NULL,
	[__v] Int32 NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL
);

CREATE TABLE [messages] (
	[_id] Id NULL,
	[conversation] String NULL,
	[readBy] String[] NULL,
	[createdBy] String NULL,
	[type] String NULL,
	[text] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[attachmentUrl] String NOT NULL
);

CREATE TABLE [payments] (
	[_id] Id NULL,
	[paymentType] Int32 NULL,
	[transactionId] Int32 NULL,
	[affiliateCode] String NULL,
	[buyerEmail] String NULL,
	[feeShipping] Int32 NULL,
	[discountAmount] Null NULL,
	[taxAmount] Null NULL,
	[orderDescription] String NULL,
	[bankCode] String NULL,
	[paymentMethod] String NULL,
	[totalAmount] Int32 NULL,
	[orderCode] String NULL,
	[receiverEmail] String NULL,
	[token] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[user] String NOT NULL
);

CREATE TABLE [resumes] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[workExperiences] Document[] NULL,
	[educations] Document[] NULL,
	[address] String NULL,
	[phone] String NULL,
	[email] String NULL,
	[attachment] String NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [salaries] (
	[_id] Id NULL,
	[createdBy] String NULL,
	[yearlySalary] Int32 NULL,
	[monthlySalary] Int32 NULL,
	[weeklySalary] Int32 NULL,
	[dailySalary] Int32 NULL,
	[currency] String NULL,
	[hourlySalary] Int32 NULL,
	[workingDaysPerMonth] Int32 NULL,
	[workingDaysPerWeek] Int32 NULL,
	[workingHoursPerDay] Int32 NULL,
	[location] String NULL,
	[career] Id NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [schools] (
	[_id] Id NULL,
	[type] String NULL,
	[name] String NULL,
	[englishName] String NULL,
	[name_fuzzy] String[] NULL,
	[englishName_fuzzy] String[] NULL,
	[__v] Int32 NULL
);

CREATE TABLE [skills] (
	[_id] Id NULL,
	[description] String NULL,
	[name] String NULL,
	[name_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[__v] Int32 NULL
);

CREATE TABLE [socials] (
	[_id] Id NULL,
	[name] String NULL,
	[prop] Int32 NULL,
	[__v] Int32 NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL
);

CREATE TABLE [universities] (
	[_id] Id NULL,
	[name] String NULL,
	[type] String NULL,
	[url] String NULL,
	[__v] Int32 NULL
);

CREATE TABLE [users] (
	[_id] Id NULL,
	[account] String NULL,
	[certificates] Document[] NULL,
	[awards] Document[] NULL,
	[educations] Document[] NULL,
	[contactMethod] String[] NULL,
	[savedJobs] String[] NULL,
	[firstName_fuzzy] String[] NULL,
	[lastName_fuzzy] String[] NULL,
	[createdAt] DateTime NULL,
	[updatedAt] DateTime NULL,
	[__v] Int32 NULL,
	[firstName] String NULL,
	[lastName] String NULL,
	[address] String NULL,
	[jobTitle] String NULL,
	[phone] String NULL,
	[isLooking] Boolean NULL,
	[isPublicProfile] Boolean NULL,
	[socialNetwork] Document NULL,
	[workExperiences] Document[] NULL,
	[following] String[] NULL,
	[avatar] String NULL,
	[associates] Document[] NULL,
	[cvs] Document[] NULL,
	[availability] Document[] NULL
);

