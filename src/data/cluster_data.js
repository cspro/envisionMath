var clusterData = {
	"colors" : {
		"text" : "#1e3956",
		"header" : "#36679C",
		"green" : "#61BB46",
		"blue" : "#009DDB",
		"yellow" : "#EFAB1E",
		"bg" : "#e9e9e9"
	},
	"gradients" : {
		"green" : [0.2, "#47A154", 1, "#61BB46"],
		"blue" : [0.2, "#3c9ac9", 1, "#4bb2db"],
		"yellow" : [0.2, "#EFAB1E", 0.7, "#F8BF14", 1, "#FFDD17"],
		"grey" : [0, "#dddddd", 1, "#ced3db"]
	},
	"key" : [{
		"id" : "green",
		"name" : "Major Cluster",
		"desc" : "Most important and greater emphasis"
	}, {
		"id" : "blue",
		"name" : "Supporting Cluster",
		"desc" : "Strongly connects to major work"
	}, {
		"id" : "yellow",
		"name" : "Additional Cluster",
		"desc" : "Completes grade-level content"
	}],
	"prompt" : "<h1>Take it for a spin.</h1><p>This interactive Common Core Cluster Wheel shows you how <b>enVision</b>math<b>2.0</b> promotes mathematical Focus and Coherence. Major work is the focus, with topics and lessons organized by Common Core Clusters. Click or tap on Clusters, Topics, and Lessons to explore the connections. IT'S ON!</p>",
	"promptButtonText" : "Click or tap the wheel to see connections &raquo",
	"grades" : {
		"_k"  : {
			"label" : "K"
		},
		"g1" : {
			"label" : "1"
		},
		"g2" : {
			"label" : "2"
		},
		"g3" : {
			"label" : "3"
		},
		"g4" : {
			"label" : "4",
			"title" : "Grade Four",
			"centerText" : "FOCUS ON\nCOMMON CORE\nCLUSTERS",
			"centerTextColor" : "#36679C",
			"legend" : {
				"heading" : "Common Core Domains",
				"key" : {
					"4.MD" : "Measurement and Data",
					"4.G" : "Geometry",
					"4.OA" : "Operations and Algebraic Thinking",
					"4.NBT" : "Number and Operations in Base Ten",
					"4.NF" : "Number and Operations-Fractions"
				}
			},
			"clusters" : [{
				"id" : "4.NBT.A",
				"labelXOffset" : 2,
				"labelYOffset" : -9,
				"title" : "Number and Operations in Base Ten",
				"desc" : "Generalize place value understanding for multi-digit numbers.",
				"color" : "green",
				"fontScale" : "0.7",
				"topics" : [{
					"title" : "Topic 1: Generalize Place Value Understanding",
					"lessons" : [{
						"id" : "1-1", "title" : "Numbers Through One Million",
						"desc" : "4.NBT.A.2, MP.2, MP.3, MP.5, MP.6, MP.7"
					}, {
						"id" : "1-2", "title" : "Place Value Relationships",
						"desc" : "4.NBT.A.1, 4.NBT.A.2, MP.2, MP.3, MP.8"
					}, {
						"id" : "1-3", "title" : "Compare Whole Numbers",
						"desc" : "4.NBT.A.2, MP.1 MP.2, MP.3,  MP.4"
					}, {
						"id" : "1-4", "title" : "Round Whole Numbers",
						"desc" : "4.NBT.A.3, MP.2, MP.3, MP.5"
					}, {
						"id" : "1-5", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Construct Arguments MP.3, Also MP.2, MP.6, 4.NBT.A.1, 4.NBT.A.2, 4.NBT.A.3"
					}]
				}]
			}, {
				"id" : "4.NBT.B",
				"labelXOffset" : -5,
				"title" : "Number and Operations in Base Ten",
				"desc" : "Use place value understanding and properties of operations to perform multi-digit arithmetic.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 2: Fluently Add and Subtract Multi-Digit Whole Numbers",
					"lessons" : [{
						"id" : "2-1", "title" : "Mental Math: Find Sums and Differences",
						"desc" : "4.NBT.B.4, MP.2, MP.3, MP.4, MP.6, MP.7"
					}, {
						"id" : "2-2", "title" : "Mental Math: Estimate Sums and Differences",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.1, MP.3, MP.5,  MP.6"
					}, {
						"id" : "2-3", "title" : "Add Whole Numbers",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.3, MP.7, MP.8"
					}, {
						"id" : "2-4", "title" : "Subtract Whole Numbers",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.1 MP.2, MP.3"
					}, {
						"id" : "2-5", "title" : "Subtract Across Zeros",
						"desc" : "4.NBT.B.4, MP.2, MP.3, MP.5, MP.8"
					}, {
						"id" : "2-6", "title" : "MATH  PRACTICES AND PROBLEM SOLVING",
						"desc" : "Reasoning MP.2, Also MP.1, MP.4, MP.8, 4.NBT.B.4, 4.OA.A.3"
					}]
				}, {
					"title" : "Topic 3: Use Strategies and Properties to Multiply by 1-Digit Numbers",
					"lessons" : [{
						"id" : "3-1", "title" : "Mental Math: Multiply by Multiples  of 10, 100, and 1,000",
						"desc" : "4.NBT.B.5, MP.2, MP.4, MP.7"
					}, {
						"id" : "3-2", "title" : "Mental Math: Round to Estimate Products",
						"desc" : "4.NBT.B.5, 4.OA.A.3,  MP.2"
					}, {
						"id" : "3-3", "title" : "The Distributive Property",
						"desc" : "4.NBT.B.5, MP.1 MP.2, MP.4, MP.7"
					}, {
						"id" : "3-4", "title" : "Mental Math Strategies for  Multiplication",
						"desc" : "4.NBT.B.5, MP.2 MP.3, MP.4, MP.7"
					}, {
						"id" : "3-5", "title" : "Arrays and Partial Products",
						"desc" : "4.NBT.B.5, MP.2, MP.4, MP.5"
					}, {
						"id" : "3-6", "title" : "Use Partial Products to Multiply by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, MP.4 MP.5, MP.7, MP.8"
					}, {
						"id" : "3-7", "title" : "Multiply 2-Digit  and 3-Digit Numbers by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.2, MP.3, MP.4, MP.8"
					}, {
						"id" : "3-8", "title" : "Multiply 4-Digit by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.4, MP.8"
					}, {
						"id" : "3-9", "title" : "Multiply by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3, MP.6, MP.8 "
					}, {
						"id" : "3-10", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.1, MP.2, MP.6, 4.NBT.B.5"
					}]
				}, {
					"title" : "Topic 4: Use Strategies and Properties to Multiply by 2-Digit Numbers",
					"lessons" : [{
						"id" : "4-1", "title" : "Mental  Math: Multiply Multiples of 10",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.7"
					}, {
						"id" : "4-2", "title" : "Use Models to Multiply 2-Digit Numbers by Multiples of 10",
						"desc" : "4.NBT.B.5, MP.1, MP.2, MP.4, MP.5"
					}, {
						"id" : "4-3", "title" : "Estimate: Use Reasoning",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3"
					}, {
						"id" : "4-4", "title" : "Estimate: Use Compatible Numbers",
						"desc" : "4.NBT.B.5, MP.2, MP.3"
					}, {
						"id" : "4-5", "title" : "Arrays and Partial Products",
						"desc" : "4.NBT.B.5, 4.OA.A.3,  MP.4, MP.7"
					}, {
						"id" : "4-6", "title" : "Multiply Using the Distributive Property",
						"desc" : "4.NBT.B.5, MP.4, MP.7"
					}, {
						"id" : "4-7", "title" : "Use Partial Products to  Multiply by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3, MP.4, MP.7"
					}, {
						"id" : "4-8", "title" : "Multiply 2-Digit Numbers by Multiples of 10",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.7"
					}, {
						"id" : "4-9", "title" : "Multiply 2-Digit by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.3, MP.4, MP.7"
					}, {
						"id" : "4-10", "title" : "Continue to Multiply by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.6, MP.7, MP.8"
					}, {
						"id" : "4-11", "title" : "MATH PRACTICES  AND PROBLEM SOLVING",
						"desc" : "Make Sense and Persevere MP.1, Also MP.2, MP.4, MP.6, MP.7, 4.NBT.B.5, 4.OA.A.3"
					}]
				}, {
					"title" : "Topic 5: Use Strategies and Properties to Divide by 1-Digit Numbers",
					"lessons" : [{
						"id" : "5-1", "title" : "Mental Math: Find  Quotients",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4, MP.7"
					}, {
						"id" : "5-2", "title" : "Mental Math: Estimate Quotients",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4"
					}, {
						"id" : "5-3", "title" : "Mental Math: Estimate Quotients for Greater Dividends",
						"desc" : "4.NBT.B.6, MP.2, MP.3"
					}, {
						"id" : "5-4", "title" : "Interpret Remainders",
						"desc" : "4.NBT.B.6, MP.1, MP.2, MP.3, MP.4"
					}, {
						"id" : "5-5", "title" : "Division as Sharing",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.2, MP.3, MP.4, MP.5"
					}, {
						"id" : "5-6", "title" : "Use Partial Quotients to Divide",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.1, MP.2, MP.4, MP.7"
					}, {
						"id" : "5-7", "title" : "Use Partial Quotients to Divide:  Greater Dividends",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.2, MP.3, MP.7"
					}, {
						"id" : "5-8", "title" : "Divide with 1-Digit Numbers",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4,  MP.6"
					}, {
						"id" : "5-9", "title" : "Continue to Divide with 1-Digit Numbers",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.7"
					}, {
						"id" : "5-10", "title" : "MATH PRACTICES AND  PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.2, MP.6, MP.7, MP.8, 4.NBT.B.6, 4.OA.A.3"
					}]
				}]
			}, {
				"id" : "4.OA.A",
				"labelXOffset" : 1,
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Use the four operations with whole numbers to solve problems.",
				"color" : "green",
				"fontScale" : "0.9",
				"topics" : [{
					"title" : "Topic 6: Use Operations with Whole Numbers to Solve Problems",
					"lessons" : [{
						"id" : "6-1", "title" : "Solve Comparison Situations",
						"desc" : "4.OA.A.1, 4.OA.A.2, 4.NPT.B.5, MP.1, MP.2, MP.3, MP.4, MP.5, MP.6"
					}, {
						"id" : "6-2", "title" : "Continue to Solve Comparison Situations",
						"desc" : "4.OA.A.1,  4.OA.A.2,4.NPT.B.5, 4.NPT.B.6, MP.1, MP.2, MP.3. MP.4"
					}, {
						"id" : "6-3", "title" : "Solve Multi-Step Problems",
						"desc" : "4.OA.A.2, 4.OA.A.3, 4.NPT.B.5, 4.NPT.B.6,  MP.1, MP.4, MP.7, MP.8"
					}, {
						"id" : "6-4", "title" : "Solve More Multi-Step Problems",
						"desc" : "4.OA.A.3, 4.OA.A.2, 4.NPT.B.5, 4.NPT.B.6, MP.1, MP.3, MP.4"
					}, {
						"id" : "6-5", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Make Sense and Persevere MP.1, Also MP.2, MP.4, MP.6, 4.OA.A.2, 4.OA.A.3, 4.NPT.B.5, 4.NPT.B.6 "
					}]
				}]
			}, {
				"id" : "4.OA.B",
				"labelXOffset" : 2,
				"labelYOffset" : 7,
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Gain familiarity with factors and mulitples.",
				"color" : "blue",
				"fontScale" : "0.8",
				"topics" : [{
					"title" : "Topic 7: Factors and Multiples",
					"lessons" : [{
						"id" : "7-1", "title" : "Understand Factors",
						"desc" : "4.OA.B.4, MP.2, MP.3, MP.5, MP.7"
					}, {
						"id" : "7-2", "title" : "Factors",
						"desc" : "4.OA.B.4, MP.1, MP.2,  MP.3, MP.4, MP.5"
					}, {
						"id" : "7-3", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Repeated Reasoning MP.8, Also MP.1, MP.2, MP.3, MP.4, MP.6, 4.OA.B.4,  4.NBT.B.5"
					}, {
						"id" : "7-4", "title" : "Prime and Composite Numbers",
						"desc" : "4.OA.B.4, MP.2, MP.3, MP.7, MP.8"
					}, {
						"id" : "7-5", "title" : "Multiples",
						"desc" : "4.OA.B.4, MP.2, MP.3, MP.7, MP.8"
					}]
				}]
			}, {
				"id" : "4.NF.A",
				"labelYOffset" : 8,
				"title" : "Number and Operations-Fractions",
				"desc" : "Extend understanding of fraction equivalence and ordering.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 8: Extend Understanding of Fraction Equivalence and Ordering",
					"lessons" : [{
						"id" : "8-1", "title" : "Equivalent Fractions: Area Models",
						"desc" : "4.NF.A.1, MP.1, MP.2, MP.3. MP.5"
					}, {
						"id" : "8-2", "title" : "Equivalent Fractions: Number Lines",
						"desc" : "4.NF.A.1, MP.1, MP.3, MP.4. MP.5, MP.7"
					}, {
						"id" : "8-3", "title" : "Generate Equivalent Fractions: Multiplication",
						"desc" : "4.NF.A.1, MP.2, MP.3. MP.4"
					}, {
						"id" : "8-4", "title" : "Generate Equivalent Fractions: Division",
						"desc" : "4.NF.A.1, MP.1, MP.2, MP.3. MP.4, MP.6"
					}, {
						"id" : "8-5", "title" : "Use Benchmarks to Compare Fractions",
						"desc" : "4.NF.A.1, 4.NF.A.2, MP.1, MP.2, MP.3. MP.8"
					}, {
						"id" : "8-6", "title" : "Compare Fractions",
						"desc" : "4.NF.A.1, 4.NF.A.2, MP.2, MP.3. MP.5"
					}, {
						"id" : "8-7", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Construct Arguments MP.3, Also MP.1, MP.2,  MP.5, 4.NF.A.1, 4.NF.A.2"
					}]
				}]
			}, {
				"id" : "4.NF.B",
				"title" : "Number and Operations-Fractions",
				"desc" : "Build fractions from unit fractions by applying and extending previous understandings of operations on whole numbers.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 9: Understand Addition and Subtraction of Fractions",
					"lessons" : [{
						"id" : "9-1", "title" : "Model Addition of Fractions",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"id" : "9-2", "title" : "Decompose Fractions",
						"desc" : "4.NF.B.3b, MP.2, MP.4, MP.5"
					}, {
						"id" : "9-3", "title" : "Add Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, 4.NF.B.3d, MP.1,  MP.3, MP.4, MP.7"
					}, {
						"id" : "9-4", "title" : "Model Subtraction of Fractions",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.4, MP.5, MP.6"
					}, {
						"id" : "9-5", "title" : "Subtract  Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, 4.NF.B.3d, MP.2, MP.3, MP.4"
					}, {
						"id" : "9-6", "title" : "Add and Subtract Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, MP.2, MP.4, MP.5"
					}, {
						"id" : "9-7", "title" : "Estimate Fraction Sums and Differences",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.3, MP.4, MP.8"
					}, {
						"id" : "9-8", "title" : "Model Addition and Subtraction of Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.2, MP.3, MP.5"
					}, {
						"id" : "9-9", "title" : "Add Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.1, MP.2, MP.3, MP.8"
					}, {
						"id" : "9-10", "title" : "Subtract Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.1, MP.2, MP.3, MP.8"
					}, {
						"id" : "9-11", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.1, MP.2, MP.5, 4.NF.A.3d, 4.NF.B.3a,"
					}]
				}, {
					"title" : "Topic 10: Extend Multiplication Concepts to Fractions",
					"lessons" : [{
						"id" : "10-1", "title" : "Fractions as Multiples  of Unit Fractions: Use Models",
						"desc" : "4.NF.B.4a, MP.2, MP.4, MP.7"
					}, {
						"id" : "10-2", "title" : "Multiply a Fraction by a Whole Number: Use Models",
						"desc" : "4.NF.B.4a, 4.NF.B.4b, 4.NF.B.4c, MP.2, MP.4, MP.7, MP.8"
					}, {
						"id" : "10-3", "title" : "Multiply a Fraction by a Whole Number: Use Symbols",
						"desc" : "4.NF.B.4a,  4.NF.B.4b, 4.NF.B.4c, MP.2, MP.4, MP.7, MP.8"
					}, {
						"id" : "10-4", "title" : "Multiply a Whole Number by a Mixed Number",
						"desc" : "4.NF.B.4c, MP.1, MP.3, MP.7"
					}, {
						"id" : "10-5", "title" : "Solve Time Problems",
						"desc" : "4.MD.A.2, 4.NF.B.4c, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"id" : "10-6", "title" : "MATH PRACTICES AND PROBLEM  SOLVING",
						"desc" : "Model with Math MP.4, Also MP.1, MP.2, MP.6, 4.NF.B.4c, 4.NF.B.3d, 4.MD.A.2"
					}]
				}]
			}, {
				"id" : "4.MD.B",
				"title" : "Measurement and Data",
				"desc" : "Represent and interpret data.",
				"color" : "blue",
				"topics" : [{
					"title" : "Topic 11: Represent and Interpret Data on Line Plots",
					"lessons" : [{
						"id" : "11-1", "title" : "Read Line Plots",
						"desc" : "4.MD.B.4,  MP.2, MP.3, MP.6, MP.7"
					}, {
						"id" : "11-2", "title" : "Make Line Plots",
						"desc" : "4.MD.B.4, 4.NF.A.1, MP.3, MP.6"
					}, {
						"id" : "11-3", "title" : "Use Line Plots to Solve  Problems",
						"desc" : "4.MD.B.4, 4.NF.B.3d, MP.1, MP.5, MP.8"
					}, {
						"id" : "11-4", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Critique Reasoning MP.3, Also  MP.1, MP.2, MP.4, 4.MD.B.4"
					}]
				}]
			}, {
				"id" : "4.NF.C",
				"title" : "Number and Operations-Fractions",
				"desc" : "Understand decimal notation for fractions, and compare decimal fractions.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 12: Understand and Compare Decimals",
					"lessons" : [{
						"id" : "12-1", "title" : "Fractions and Decimals",
						"desc" : "4.NF.C.6, MP.2, MP.3, MP.4"
					}, {
						"id" : "12-2", "title" : "Fractions and  Decimals on the Number Line",
						"desc" : "4.NF.C.6, MP.1, MP.2, MP.4, MP.6, MP.7"
					}, {
						"id" : "12-3", "title" : "Compare Decimals",
						"desc" : "4.NF.C.7, 4.MD.A.2, MP.2,  MP.3, MP.5"
					}, {
						"id" : "12-4", "title" : "Add Fractions with Denominators of 10 and 100",
						"desc" : "4.NF.C.5, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"id" : "12-5", "title" : "Solve Word Problems Involving Money",
						"desc" : "4.MD.A.2, 4.NF.C.6, MP.1, MP.2, MP.4, MP.7, MP.8"
					}, {
						"id" : "12-6", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Look For and Use Structure MP.7, Also MP.1, MP.2, MP.3, MP.4, MP.6, 4.NF.C.7, 4.MD.A.2"
					}]
				}]
			}, {
				"id" : "4.MD.A",
				"title" : "Measurement and Data",
				"desc" : "Solve problems involving measurement and conversion of measurements from a larger unit to a smaller unit.",
				"color" : "blue",
				"topics" : [{
					"title" : "Topic 13: Measurement: Find Equivalence in Units of Measure",
					"lessons" : [{
						"id" : "13-1", "title" : "Equivalence with Customary Units of Length",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.6, MP.7, MP.8"
					}, {
						"id" : "13-2", "title" : "Equivalence with Customary Units of Capacity",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.6, MP.8"
					}, {
						"id" : "13-3", "title" : "Equivalence with Customary Units of Weight",
						"desc" : "4.MD.A.1,  4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.2, MP.6, MP.8"
					}, {
						"id" : "13-4", "title" : "Equivalence with Metric Units of Length",
						"desc" : "4.MD.A.1, 4.MD.A.2, MP.1,  MP.3, MP.5, MP.6, MP.8"
					}, {
						"id" : "13-5", "title" : "Equivalence with Metric Units of Capacity and Mass",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1,  MP.2, MP.6, MP.8"
					}, {
						"id" : "13-6", "title" : "Solve Perimeter and Area Problems",
						"desc" : "4.MD.A.3, 4.MD.A.2, 4.NBT.B.5, 4.NF.B.4c, MP.1, MP.2, MP.3"
					}, {
						"id" : "13-7", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Precision MP.6, Also MP.1, MP.2, MP.4, 4.MD.A.2, 4.MD.A.3, 4.NBT.B.5, 4NBT.B.4"
					}]
				}]
			}, {
				"id" : "4.OA.C",
				"labelXOffset" : -3,
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Generate and analyze patterns.",
				"color" : "yellow",
				"fontScale" : "0.8",
				"topics" : [{
					"title" : "Topic 14: Algebra: Generate and Analyze Patterns",
					"lessons" : [{
						"id" : "14-1", "title" : "Number Sequences",
						"desc" : "4.OA.C.5, MP.1, MP.2, MP.4, MP.5, MP.7, MP.8"
					}, {
						"id" : "14-2", "title" : "Patterns: Number Rules",
						"desc" : "4.OA.C.5, MP.2, MP.7 "
					}, {
						"id" : "14-3", "title" : "Patterns: Repeating Shapes",
						"desc" : "4.OA.C.5, MP.2, MP.3, MP.6, MP.7"
					}, {
						"id" : "14-4", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Look For and Use Structure MP.7, Also MP.1, MP.2, 4.OA.C.5"
					}]
				}]
			}, {
				"id" : "4.MD.C",
				"labelXOffset" : -3,
				"labelYOffset" : -6,
				"title" : "Measurement and Data",
				"desc" : "Geometric measurement: Understand concepts of angle and measure angles.",
				"color" : "yellow",
				"topics" : [{
					"title" : "Topic 15: Geometric Measurement: Understand Concepts of Angles and Angle Measurement",
					"lessons" : [{
						"id" : "15-1", "title" : "Lines, Rays, and Angles",
						"desc" : "4.MD.C.5, 4.G.A.1, MP.2,  MP.4, MP.6, MP.7"
					}, {
						"id" : "15-2", "title" : "Understand Angles and Unit Angles",
						"desc" : "4.MD.C.5a, MP.1, MP.2, MP.3, MP.4"
					}, {
						"id" : "15-3", "title" : "Measure  with Unit Angles",
						"desc" : "4.MD.C.5a, 4.MD.C.5b, MP.1, MP.3, MP.4, MP.5, MP.8"
					}, {
						"id" : "15-4", "title" : "Measure and Draw Angles",
						"desc" : "4.MD.C.6, MP.1,  MP.2, MP.3, MP.5, MP.6"
					}, {
						"id" : "15-5", "title" : "Add and Subtract Angle Measures",
						"desc" : "4.MD.C.7, MP.1, MP.2, MP.3, MP.4, MP.7"
					}, {
						"id" : "15-6", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Use Appropriate Tools MP.5, Also MP.1, MP.2, MP.4, 4.MD.C.6, 4.MD.C.7"
					}]
				}]
			}, {
				"id" : "4.G.A",
				"labelXOffset" : -2,
				"labelYOffset" : -9,
				"title" : "Geometry",
				"desc" : "Draw and identify lines and angles, and classify shapes by properties of their lines and angles.",
				"color" : "yellow",
				"topics" : [{
					"title" : "Topic 16: Lines, Angles, and Shapes",
					"lessons" : [{
						"id" : "16-1", "title" : "Lines",
						"desc" : "4.G.A.1, MP.3, MP.4, MP.6"
					}, {
						"id" : "16-2", "title" : "Classify Triangles",
						"desc" : "4.G.A.2, MP.3, MP.6, MP.8"
					}, {
						"id" : "16-3", "title" : "Classify Quadrilaterals",
						"desc" : "4.G.A.2, MP.2, MP.3, MP.6, MP.7, MP.8"
					}, {
						"id" : "16-4", "title" : "Line Symmetry",
						"desc" : "4.G.A.3, MP.2, MP.3, MP.5, MP.7"
					}, {
						"id" : "16-5", "title" : "Draw Shapes with Line Symmetry",
						"desc" : "4.G.A.3, MP.1, MP.2, MP.3, MP.4"
					}, {
						"id" : "16-6", "title" : "MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Critique  Reasoning MP.3, Also MP.1, MP.2, MP.6, MP.7, 4.G.A.2"
					}]
				}]
			}]
		},
		"g5" : {
			"label" : "5"
		},
		"g6" : {
			"label" : "6"
		}

	}
};
