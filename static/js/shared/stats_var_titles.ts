/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Titles for each stats var. Used as titles in Ranking pages to describe each
 * stats var.
 */
const STATS_VAR_TITLES: { [key: string]: string } = {
  // No PVs
  Median_Age_Person: "Median Age",
  Median_Income_Person: "Median Individual Income",
  UnemploymentRate_Person: "Unemployment Rate",
  Count_UnemploymentInsuranceClaim_StateUnemploymentInsurance:
    "State Unemployment Insurance Claims",
  Count_Person_Employed: "Number of Employed People",
  Count_Person_InLaborForce: "Labor Force",
  Count_Person: "Population",
  Count_Person_PerArea: "Population Density",
  LifeExpectancy_Person: "Life Expectancy",
  GrowthRate_Count_Person: "Population Growth Rate",
  FertilityRate_Person_Female: "Fertility Rate",
  Count_HousingUnit: "Number of Housing Units",

  // Economics
  Amount_EconomicActivity_GrossDomesticProduction_Nominal:
    "Gross Domestic Product (Nominal)",
  GrowthRate_Amount_EconomicActivity_GrossDomesticProduction:
    "Gross Domestic Product Growth Rate",
  Amount_Debt_Government: "Government Debt",
  Amount_EconomicActivity_GrossDomesticProduction_Nominal_PerCapita:
    "Gross Domestic Product (Nominal) Per Capita",
  Amount_EconomicActivity_GrossNationalIncome_PurchasingPowerParity_PerCapita:
    "Gross National Income (Purchasing Power Parity) Per Capita",
  Amount_EconomicActivity_GrossNationalIncome_PurchasingPowerParity:
    "Gross National Income (Purchasing Power Parity)",
  Count_Person_7To14Years_Employed_AsFractionOf_Count_Person_7To14Years:
    "Children Ages 7-14 in Employment",
  Amount_EconomicActivity_ExpenditureActivity_EducationExpenditure_Government_AsFractionOf_Amount_EconomicActivity_ExpenditureActivity_Government:
    "Government Expenditures on Education (% of Government Expenditures)",
  Amount_EconomicActivity_ExpenditureActivity_EducationExpenditure_Government_AsFractionOf_Amount_EconomicActivity_GrossDomesticProduction_Nominal:
    "Government Expenditures on Education (% of GDP)",
  Amount_EconomicActivity_ExpenditureActivity_MilitaryExpenditure_Government:
    "Government Expenditures on Military",
  Amount_EconomicActivity_ExpenditureActivity_MilitaryExpenditure_Government_AsFractionOf_Amount_EconomicActivity_GrossDomesticProduction_Nominal:
    "Government Expenditures on Military (% of GDP)",
  Amount_Stock: "Market Capitalization of Domestic Companies",
  Amount_Stock_AsFractionOf_Amount_EconomicActivity_GrossDomesticProduction_Nominal:
    "Market Capitalization of Domestic Companies (% of GDP)",
  Amount_Remittance_InwardRemittance: "Inward Remittance",
  Amount_Remittance_InwardRemittance_AsFractionOf_Amount_EconomicActivity_GrossDomesticProduction_Nominal:
    "Inward Remittance (% of GDP)",
  Amount_Remittance_OutwardRemittance: "Outward Remittance",
  Count_Person_15To64Years_InLaborForce_AsFractionOf_Count_Person_15To64Years:
    "Percent of People in Labor Force (ages 15-64)",

  // Environment
  Amount_Consumption_Energy_PerCapita: "Energy Consumption Per Capita",
  Amount_Emissions_CarbonDioxide_PerCapita:
    "Carbon Dioxide Emissions Per Capita",
  Amount_Consumption_Electricity_PerCapita:
    "Electricity Consumption Per Capita",
  Count_EarthquakeEvent: "Earthquake Events",
  Count_CycloneEvent: "Cyclone Events",
  Count_StormSurgeTideEvent: "Storm Surge Tide Events",
  Count_WildlandFireEvent: "Wildland Fire Events",
  Count_TornadoEvent: "Tornado Events",
  Count_ThunderstormWindEvent: "Thunderstorm Events",
  Count_FloodEvent: "Flood Events",
  Count_DroughtEvent: "Drought Events",

  // age
  Count_Person_Upto4Years: "Population Ages 0-4",
  Count_Person_Upto9Years: "Population Ages 0-9",
  Count_Person_5To9Years: "Population Ages 5-9",
  Count_Person_5To17Years: "Population Ages 5-17",
  Count_Person_10To14Years: "Population Ages 10-14",
  Count_Person_10To19Years: "Population Ages 10-19",
  Count_Person_15To19Years: "Population Ages 15-19",
  Count_Person_15OrMoreYears: "Population Ages 15+",
  Count_Person_16OrMoreYears: "Population Ages 16+",
  Count_Person_18To24Years: "Population Ages 18-24",
  Count_Person_20To24Years: "Population Ages 20-24",
  Count_Person_20To29Years: "Population Ages 20-29",
  Count_Person_25To29Years: "Population Ages 25-29",
  Count_Person_25To34Years: "Population Ages 25-34",
  Count_Person_30To34Years: "Population Ages 30-34",
  Count_Person_30To39Years: "Population Ages 30-39",
  Count_Person_35To39Years: "Population Ages 35-39",
  Count_Person_35To44Years: "Population Ages 35-44",
  Count_Person_40To44Years: "Population Ages 40-44",
  Count_Person_40To49Years: "Population Ages 40-49",
  Count_Person_45To49Years: "Population Ages 45-49",
  Count_Person_45To54Years: "Population Ages 45-54",
  Count_Person_50To54Years: "Population Ages 50-54",
  Count_Person_50To59Years: "Population Ages 50-59",
  Count_Person_55To59Years: "Population Ages 55-59",
  Count_Person_55To64Years: "Population Ages 55-64",
  Count_Person_60To61Years: "Population Ages 60-61",
  Count_Person_60To64Years: "Population Ages 60-64",
  Count_Person_60To69Years: "Population Ages 60-69",
  Count_Person_62To64Years: "Population Ages 62-64",
  Count_Person_65To69Years: "Population Ages 65-69",
  Count_Person_65To74Years: "Population Ages 65-74",
  Count_Person_70To74Years: "Population Ages 70-74",
  Count_Person_70To79Years: "Population Ages 70-79",
  Count_Person_70OrMoreYears: "Population Ages 70+",
  Count_Person_75To79Years: "Population Ages 75-79",
  Count_Person_75OrMoreYears: "Population Ages 75+",
  Count_Person_80To84Years: "Population Ages 80-84",
  Count_Person_80OrMoreYears: "Population Ages 80+",

  // gender
  Count_Person_Male: "Population (Male)",
  Count_Person_Female: "Population (Female)",
  Median_Age_Person_Male: "Median Age of Males",
  Median_Age_Person_Female: "Median Age of Females",

  // race
  Count_Person_AmericanIndianOrAlaskaNativeAlone:
    "Population (American Indians or Alaska Native)",
  Count_Person_AsianAlone: "Population (Asian Alone)",
  Count_Person_BlackOrAfricanAmericanAlone:
    "Population (Black or African American)",
  Count_Person_HispanicOrLatino: "Population (Hispanic or Latino)",
  Count_Person_NativeHawaiianOrOtherPacificIslanderAlone:
    "Population (Native Hawaiian or Pacific Islander)",
  Count_Person_SomeOtherRaceAlone: "Population (Some Other Race)",
  Count_Person_TwoOrMoreRaces: "Population (Two or More Races)",
  Count_Person_WhiteAlone: "Population (White Alone)",

  Count_HousingUnit_HouseholderRaceAmericanIndianOrAlaskaNativeAlone:
    "Population (American Indians or Alaska Native)",
  Count_HousingUnit_HouseholderRaceAsianAlone: "Population (Asian Alone)",
  Count_HousingUnit_HouseholderRaceBlackOrAfricanAmericanAlone:
    "Population (Black or African American)",
  Count_HousingUnit_HouseholderRaceHispanicOrLatino:
    "Population (Hispanic or Latino)",
  Count_HousingUnit_HouseholderRaceNativeHawaiianOrOtherPacificIslanderAlone:
    "Population (Native Hawaiian or Pacific Islander)",
  Count_HousingUnit_HouseholderRaceSomeOtherRaceAlone:
    "Population (Some Other Race)",
  Count_HousingUnit_HouseholderRaceTwoOrMoreRaces:
    "Population (Two or More Races)",
  Count_HousingUnit_HouseholderRaceWhiteAlone: "Population (White Alone)",

  Median_Age_Person_AmericanIndianOrAlaskaNativeAlone:
    "Median Age (American Indian or Alaska Native)",
  Median_Age_Person_AsianAlone: "Median Age (Asian Alone)",
  Median_Age_Person_BlackOrAfricanAmericanAlone:
    "Median Age (Black or African American)",
  Median_Age_Person_HispanicOrLatino: "Median Age (Hispanic or Latino)",
  Median_Age_Person_NativeHawaiianOrOtherPacificIslanderAlone:
    "Median Age (Native Hawaiian or Pacific Islander)",
  Median_Age_Person_SomeOtherRaceAlone: "Median Age (Some Other Race)",
  Median_Age_Person_TwoOrMoreRaces: "Median Age (Two or More Races)",
  Median_Age_Person_WhiteAlone: "Median Age (White Alone)",

  // income
  Count_Person_IncomeOfUpto9999USDollar:
    "People with Individual Income (Under $10K)",
  Count_Person_IncomeOf10000To14999USDollar:
    "People with Individual Income ($10K to $15K)",
  Count_Person_IncomeOf15000To24999USDollar:
    "People with Individual Income ($15K to $25K)",
  Count_Person_IncomeOf25000To34999USDollar:
    "People with Individual Income ($25K to $35K)",
  Count_Person_IncomeOf35000To49999USDollar:
    "People with Individual Income ($35K to $50K)",
  Count_Person_IncomeOf50000To64999USDollar:
    "People with Individual Income ($50K to $65K)",
  Count_Person_IncomeOf65000To74999USDollar:
    "People with Individual Income ($65K to $75K)",
  Count_Person_IncomeOf75000OrMoreUSDollar:
    "People with Individual Income (Over $75K)",

  // marital status
  Count_Person_MarriedAndNotSeparated: "Population (Married and Not Separated)",
  Count_Person_Divorced: "Population (Divorced)",
  Count_Person_NeverMarried: "Population (Never Married)",
  Count_Person_Widowed: "Population (Widowed)",
  Count_Person_Separated: "Population (Separated)",

  // living situation
  Count_Person_Urban: "Population (Urban)",
  Count_Person_Rural: "Population (Rural)",

  // education/poulation
  Count_Person_EducationalAttainmentNoSchoolingCompleted:
    "Population (No Schooling)",
  Count_Person_EducationalAttainmentRegularHighSchoolDiploma:
    "Population (High School)",
  Count_Person_EducationalAttainmentBachelorsDegree: "Population (Bachelor's)",
  Count_Person_EducationalAttainmentMastersDegree: "Population (Master's)",
  Count_Person_EducationalAttainmentDoctorateDegree: "Population (Doctorate)",

  // household/income
  Count_Household_IncomeOfUpto10000USDollar:
    "Households with Income (Under $10K)",
  Count_Household_IncomeOf10000To14999USDollar:
    "Households with Income ($10K to $15K)",
  Count_Household_IncomeOf20000To24999USDollar:
    "Households with Income ($20K to $25K)",
  Count_Household_IncomeOf30000To34999USDollar:
    "Households with Income ($30K to $35K)",
  Count_Household_IncomeOf40000To44999USDollar:
    "Households with Income ($40K to $45K)",
  Count_Household_IncomeOf50000To59999USDollar:
    "Households with Income ($50K to $60K)",
  Count_Household_IncomeOf60000To74999USDollar:
    "Households with Income ($60K to $75K)",
  Count_Household_IncomeOf75000To99999USDollar:
    "Households with Income ($75K to $100K)",
  Count_Household_IncomeOf100000To124999USDollar:
    "Households with Income ($100K to $125K)",
  Count_Household_IncomeOf125000To149999USDollar:
    "Households with Income ($125K to $150K)",
  Count_Household_IncomeOf150000To199999USDollar:
    "Households with Income ($150K to $200K)",
  Count_Household_IncomeOf200000OrMoreUSDollar:
    "Households with Income (Over $200K)",

  Median_Income_Household: "Median Household Income",

  // COVID-19
  CumulativeCount_MedicalConditionIncident_COVID_19_ConfirmedOrProbableCase:
    "COVID-19 Cumulative Cases",
  CumulativeCount_MedicalConditionIncident_COVID_19_PatientDeceased:
    "COVID-19 Cumulative Deaths",

  // Citizenship
  Count_Person_USCitizenBornInTheUnitedStates: "Population (Born in USA)",
  Count_Person_USCitizenByNaturalization:
    "Population (Citizen by Naturalization)",
  Count_Person_NotAUSCitizen: "Population (Not a Citizen)",
  Count_Person_USCitizenBornAbroadOfAmericanParents: "Population (Born Abroad)",

  // Mortality
  Count_Death_0Years_AsFractionOf_Count_BirthEvent_LiveBirth:
    "Infant Mortality Rate",

  // Mortality cause
  Count_Death_DiseasesOfTheCirculatorySystem:
    "Deaths Caused by Diseases of the Circulatory System",
  Count_Death_Neoplasms: "Deaths Caused by Neoplasms",
  Count_Death_DiseasesOfTheRespiratorySystem:
    "Deaths Caused by Diseases of the Respiratory System",
  Count_Death_ExternalCauses: "Deaths Caused by External Causes",
  Count_Death_DiseasesOfTheNervousSystem:
    "Deaths Caused by Diseases of the Nervous System",

  // Outcomes
  Percent_Person_WithHighCholesterol:
    "Percentage of People with High Cholesterol",
  Percent_Person_WithHighBloodPressure:
    "Percentage of People with High Blood Pressure",
  Percent_Person_WithArthritis: "Percentage of People with Arthritis",
  Percent_Person_WithMentalHealthNotGood:
    "Percentage of People with Mental Health Not Good",
  Percent_Person_WithPhysicalHealthNotGood:
    "Percentage of People with Physical Health Not Good",
  Count_Person_Upto4Years_Wasting_AsFractionOf_Count_Person_Upto4Years:
    "Wasting among Children under 5",
  Count_Person_Upto4Years_SevereWasting_AsFractionOf_Count_Person_Upto4Years:
    "Severe Wasting among Children under 5",

  // Behaviors
  Percent_Person_SleepLessThan7Hours:
    "Percentage of People Who Sleep Less Than 7 Hours",
  Percent_Person_Obesity: "Percentage of People with Obesity",
  Percent_Person_BingeDrinking: "Percentage of People That Binge Drink",
  Percent_Person_PhysicalInactivity:
    "Percentage of People with Physical Inactivity",
  Percent_Person_Smoking: "Percentage of People That Smoke",
  Amount_Consumption_Alcohol_15OrMoreYears_AsFractionOf_Count_Person_15OrMoreYears:
    "Alcohol Consumption Per Capita (Annual)",

  // Drug Prescribed
  RetailDrugDistribution_DrugDistribution_Oxycodone:
    "Total Retail Drug Distribution of Oxycodone",
  RetailDrugDistribution_DrugDistribution_Hydrocodone:
    "Total Retail Drug Distribution of Hydrocodone",
  RetailDrugDistribution_DrugDistribution_Codeine:
    "Total Retail Drug Distribution of Codeine",
  RetailDrugDistribution_DrugDistribution_Amphetamine:
    "Total Retail Drug Distribution of Amphetamine",
  RetailDrugDistribution_DrugDistribution_Morphine:
    "Total Retail Drug Distribution of Morphine",

  // School Enrollment
  Count_Person_EnrolledInSchool: "Population (Enrolled in School)",
  Count_Person_NotEnrolledInSchool: "Population (Not Enrolled in School)",

  // Crime
  Count_CriminalActivities_CombinedCrime:
    "Criminal Activity Count (Combined Crimes)",
  Count_CriminalActivities_ViolentCrime:
    "Criminal Activity Count (Violent Crimes)",
  Count_CriminalActivities_PropertyCrime:
    "Criminal Activity Count (Property Crimes)",
  Count_CriminalActivities_Arson: "Criminal Activity Count (Arson)",

  // Employment
  UnemploymentRate_Person_Male: "Unemployment Rate (Male)",
  UnemploymentRate_Person_Female: "Unemployment Rate (Female)",

  // Inequality
  Count_Person_BelowPovertyLevelInThePast12Months:
    "Population Below Poverty Level in the Past 12 Months",
  Count_Person_BelowPovertyLevelInThePast12Months_AmericanIndianOrAlaskaNativeAlone:
    "Population Below Poverty Level in the Past 12 Months (American Indian or Alaska Native)",
  Count_Person_BelowPovertyLevelInThePast12Months_AsianAlone:
    "Population Below Poverty Level in the Past 12 Months (Asian)",
  Count_Person_BelowPovertyLevelInThePast12Months_BlackOrAfricanAmericanAlone:
    "Population Below Poverty Level in the Past 12 Months (Black or African American)",
  Count_Person_BelowPovertyLevelInThePast12Months_HispanicOrLatino:
    "Population Below Poverty Level in the Past 12 Months (Hispanic or Latino)",
  Count_Person_BelowPovertyLevelInThePast12Months_NativeHawaiianOrOtherPacificIslanderAlone:
    "Population Below Poverty Level in the Past 12 Months (Native Hawaiian or Other Paciific Islander)",
  Count_Person_BelowPovertyLevelInThePast12Months_WhiteAlone:
    "Population Below Poverty Level in the Past 12 Months (White)",

  Median_Income_Person_15OrMoreYears_Male_WithIncome:
    "Median Individual Income (Male)",
  Median_Income_Person_15OrMoreYears_Female_WithIncome:
    "Median Individual Income (Female)",

  Count_Person_Female_BelowPovertyLevelInThePast12Months:
    "Population Below Poverty Level in the Past 12 Months (Female)",
  Count_Person_Male_BelowPovertyLevelInThePast12Months:
    "Population Below Poverty Level in the Past 12 Months (Male)",

  Median_Income_Household_HouseholderRaceAmericanIndianOrAlaskaNativeAlone:
    "Median Individual Income (American Indian or Alaska Native)",
  Median_Income_Household_HouseholderRaceAsianAlone:
    "Median Individual Income (Asian)",
  Median_Income_Household_HouseholderRaceBlackOrAfricanAmericanAlone:
    "Median Individual Income (Black or African American)",
  Median_Income_Household_HouseholderRaceHispanicOrLatino:
    "Median Individual Income (Hispanic or Latino)",
  Median_Income_Household_HouseholderRaceNativeHawaiianOrOtherPacificIslanderAlone:
    "Median Individual Income (Native Hawaiian or Pacific Islander)",
  Median_Income_Household_HouseholderRaceWhiteAlone:
    "Median Individual Income (White)",

  Percent_Person_18To64Years_Female_NoHealthInsurance:
    "Percentage of Females without Health Insurance",
  Percent_Person_18To64Years_Male_NoHealthInsurance:
    "Percentage of Males without Health Insurance",

  Percent_Person_18To64Years_NoHealthInsurance_BlackOrAfricanAmericanAlone:
    "Percentage of Blacks Or African Americans without Health Insurance",
  Percent_Person_18To64Years_NoHealthInsurance_HispanicOrLatino:
    "Percentage of Hispanics or Latinos without Health Insurance",
  Percent_Person_18To64Years_NoHealthInsurance_WhiteAlone:
    "Percentage of Whites without Health Insurance",

  Count_Person_25To34Years_EducationalAttainmentAssociatesDegree_Female:
    "Count of Females with Associates Degrees",
  Count_Person_25To34Years_EducationalAttainmentAssociatesDegree_Male:
    "Count of Males with Associates Degrees",
  Count_Person_25To34Years_EducationalAttainmentBachelorsDegree_Female:
    "Count of Females with Bachelors Degrees",
  Count_Person_25To34Years_EducationalAttainmentBachelorsDegree_Male:
    "Count of Males with Bachelors Degrees",
  Count_Person_25To34Years_EducationalAttainmentGraduateOrProfessionalDegree_Female:
    "Count of Females with Graduate or Professional Degrees",
  Count_Person_25To34Years_EducationalAttainmentGraduateOrProfessionalDegree_Male:
    "Count of Males with Graduate or Professional Degrees",

  Count_Person_7To14Years_Female_Employed_AsFractionOf_Count_Person_7To14Years_Female:
    "Children in Employment (Female)",
  Count_Person_7To14Years_Male_Employed_AsFractionOf_Count_Person_7To14Years_Male:
    "Children in Employment (Male)",

  Count_Death_0Years_Female_AsFractionOf_Count_BirthEvent_LiveBirth_Female:
    "Infant Mortality Rate (Female)",
  Count_Death_0Years_Male_AsFractionOf_Count_BirthEvent_LiveBirth_Male:
    "Infant Mortality Rate (Male)",

  Count_Person_Upto4Years_Female_Wasting_AsFractionOf_Count_Person_Upto4Years_Female:
    "Wasting among Children under 5 (Female)",
  Count_Person_Upto4Years_Female_SevereWasting_AsFractionOf_Count_Person_Upto4Years_Female:
    "Severe Wasting among Children under 5 (Female)",
  Count_Person_Upto4Years_Male_Wasting_AsFractionOf_Count_Person_Upto4Years_Male:
    "Wasting among Children under 5 (Male)",
  Count_Person_Upto4Years_Male_SevereWasting_AsFractionOf_Count_Person_Upto4Years_Male:
    "Severe Wasting among Children under 5 (Male)",

  GiniIndex_EconomicActivity: "Gini Index",

  // Housing
  Count_HousingUnit_HomeValueUpto49999USDollar: "Under $50K",
  Count_HousingUnit_HomeValue50000To99999USDollar: "$50K - $100K",
  Count_HousingUnit_HomeValue100000To199999USDollar: "$100K - $200K",
  Count_HousingUnit_HomeValue200000To299999USDollar: "$200K - $300K",
  Count_HousingUnit_HomeValue300000To499999USDollar: "$300K - $500K",
  Count_HousingUnit_HomeValue500000To999999USDollar: "$500K - $1M",
  Count_HousingUnit_HomeValue1000000To1499999USDollar: "$1M - $1.5M",
  Count_HousingUnit_HomeValue1500000To1999999USDollar: "$1.5M - $2M",
  Count_HousingUnit_HomeValue2000000OrMoreUSDollar: "Over $2M",

  Count_HousingUnit_OwnerOccupied: "Owner",
  Count_HousingUnit_RenterOccupied: "Renter",

  Count_HousingUnit_Before1939DateBuilt: "Before 1939",
  Count_HousingUnit_1940To1949DateBuilt: "1940 - 1949",
  Count_HousingUnit_1950To1959DateBuilt: "1950 - 1959",
  Count_HousingUnit_1960To1969DateBuilt: "1960 - 1969",
  Count_HousingUnit_1970To1979DateBuilt: "1970 - 1979",
  Count_HousingUnit_1980To1989DateBuilt: "1980 - 1989",
  Count_HousingUnit_1990To1999DateBuilt: "1990 - 1999",
  Count_HousingUnit_2000To2009DateBuilt: "2000 - 2009",
  Count_HousingUnit_2010OrLaterDateBuilt: "After 2010",
};

export { STATS_VAR_TITLES };
