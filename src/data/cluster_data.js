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
				"title" : "Number and Operations in Base Ten",
				"desc" : "Generalize place value understanding for multi-digit numbers.",
				"color" : "green",
				"fontScale" : "0.7",
				"topics" : [{
					"title" : "Topic 1: Generalize Place Value Understanding",
					"lessons" : [{
						"title" : "1-1 Numbers Through One Million",
						"desc" : "4.NBT.A.2, MP.2, MP.3, MP.5, MP.6, MP.7"
					}, {
						"title" : "1-2 Place Value Relationships",
						"desc" : "4.NBT.A.1, 4.NBT.A.2, MP.2, MP.3, MP.8"
					}, {
						"title" : "1-3 Compare Whole Numbers",
						"desc" : "4.NBT.A.2, MP.1 MP.2, MP.3,  MP.4"
					}, {
						"title" : "1-4 Round Whole Numbers",
						"desc" : "4.NBT.A.3, MP.2, MP.3, MP.5"
					}, {
						"title" : "1-5 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Construct Arguments MP.3, Also MP.2, MP.6, 4.NBT.A.1, 4.NBT.A.2, 4.NBT.A.3"
					}]
				}]
			}, {
				"id" : "4.NBT.B",
				"title" : "Number and Operations in Base Ten",
				"desc" : "Use place value understanding and properties of operations to perform multi-digit arithmetic.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 2: Fluently Add and Subtract Multi-Digit Whole Numbers",
					"lessons" : [{
						"title" : "2-1 Mental Math: Find Sums and Differences",
						"desc" : "4.NBT.B.4, MP.2, MP.3, MP.4, MP.6, MP.7"
					}, {
						"title" : "2-2 Mental Math: Estimate Sums and Differences",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.1, MP.3, MP.5,  MP.6"
					}, {
						"title" : "2-3 Add Whole Numbers",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.3, MP.7, MP.8"
					}, {
						"title" : "2-4 Subtract Whole Numbers",
						"desc" : "4.NBT.B.4, 4.OA.A.3, MP.1 MP.2, MP.3"
					}, {
						"title" : "2-5 Subtract Across Zeros",
						"desc" : "4.NBT.B.4, MP.2, MP.3, MP.5, MP.8"
					}, {
						"title" : "2-6 MATH  PRACTICES AND PROBLEM SOLVING",
						"desc" : "Reasoning MP.2, Also MP.1, MP.4, MP.8, 4.NBT.B.4, 4.OA.A.3"
					}]
				}, {
					"title" : "Topic 3: Use Strategies and Properties to Multiply by 1-Digit Numbers",
					"lessons" : [{
						"title" : "3-1 Mental Math: Multiply by Multiples  of 10, 100, and 1,000",
						"desc" : "4.NBT.B.5, MP.2, MP.4, MP.7"
					}, {
						"title" : "3-2 Mental Math: Round to Estimate Products",
						"desc" : "4.NBT.B.5, 4.OA.A.3,  MP.2"
					}, {
						"title" : "3-3 The Distributive Property",
						"desc" : "4.NBT.B.5, MP.1 MP.2, MP.4, MP.7"
					}, {
						"title" : "3-4 Mental Math Strategies for  Multiplication",
						"desc" : "4.NBT.B.5, MP.2 MP.3, MP.4, MP.7"
					}, {
						"title" : "3-5 Arrays and Partial Products",
						"desc" : "4.NBT.B.5, MP.2, MP.4, MP.5"
					}, {
						"title" : "3-6 Use Partial Products to Multiply by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, MP.4 MP.5, MP.7, MP.8"
					}, {
						"title" : "3-7 Multiply 2-Digit  and 3-Digit Numbers by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.2, MP.3, MP.4, MP.8"
					}, {
						"title" : "3-8 Multiply 4-Digit by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.4, MP.8"
					}, {
						"title" : "3-9 Multiply by 1-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3, MP.6, MP.8 "
					}, {
						"title" : "3-10 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.1, MP.2, MP.6, 4.NBT.B.5"
					}]
				}, {
					"title" : "Topic 4: Use Strategies and Properties to Multiply by 2-Digit Numbers",
					"lessons" : [{
						"title" : "4-1 Mental  Math: Multiply Multiples of 10",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.7"
					}, {
						"title" : "4-2 Use Models to Multiply 2-Digit Numbers by Multiples of 10",
						"desc" : "4.NBT.B.5, MP.1, MP.2, MP.4, MP.5"
					}, {
						"title" : "4-3 Estimate: Use Reasoning",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3"
					}, {
						"title" : " 4-4 Estimate: Use Compatible Numbers",
						"desc" : "4.NBT.B.5, MP.2, MP.3"
					}, {
						"title" : "4-5 Arrays and Partial Products",
						"desc" : "4.NBT.B.5, 4.OA.A.3,  MP.4, MP.7"
					}, {
						"title" : "4-6 Multiply Using the Distributive Property",
						"desc" : "4.NBT.B.5, MP.4, MP.7"
					}, {
						"title" : "4-7 Use Partial Products to  Multiply by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.3, MP.4, MP.7"
					}, {
						"title" : "4-8 Multiply 2-Digit Numbers by Multiples of 10",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.2, MP.7"
					}, {
						"title" : "4-9 Multiply 2-Digit by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.3, MP.4, MP.7"
					}, {
						"title" : "4-10 Continue to Multiply by 2-Digit Numbers",
						"desc" : "4.NBT.B.5, 4.OA.A.3, MP.1, MP.6, MP.7, MP.8"
					}, {
						"title" : "4-11 MATH PRACTICES  AND PROBLEM SOLVING",
						"desc" : "Make Sense and Persevere MP.1, Also MP.2, MP.4, MP.6, MP.7, 4.NBT.B.5, 4.OA.A.3"
					}]
				}, {
					"title" : "Topic 5: Use Strategies and Properties to Divide by 1-Digit Numbers",
					"lessons" : [{
						"title" : "5-1 Mental Math: Find  Quotients",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4, MP.7"
					}, {
						"title" : "5-2 Mental Math: Estimate Quotients",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4"
					}, {
						"title" : "5-3 Mental Math: Estimate Quotients for Greater Dividends",
						"desc" : "4.NBT.B.6, MP.2, MP.3"
					}, {
						"title" : "5-4 Interpret Remainders",
						"desc" : "4.NBT.B.6, MP.1, MP.2, MP.3, MP.4"
					}, {
						"title" : "5-5 Division as Sharing",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.2, MP.3, MP.4, MP.5"
					}, {
						"title" : "5-6 Use Partial Quotients to Divide",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.1, MP.2, MP.4, MP.7"
					}, {
						"title" : "5-7 Use Partial Quotients to Divide:  Greater Dividends",
						"desc" : "4.NBT.B.6, 4.OA.A.3, MP.2, MP.3, MP.7"
					}, {
						"title" : "5-8 Divide with 1-Digit Numbers",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.4,  MP.6"
					}, {
						"title" : "5-9 Continue to Divide with 1-Digit Numbers",
						"desc" : "4.NBT.B.6, MP.2, MP.3, MP.7"
					}, {
						"title" : "5-10 MATH PRACTICES AND  PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.2, MP.6, MP.7, MP.8, 4.NBT.B.6, 4.OA.A.3"
					}]
				}]
			}, {
				"id" : "4.OA.A",
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Use the four operations with whole numbers to solve problems.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 6: Use Operations with Whole Numbers to Solve Problems",
					"lessons" : [{
						"title" : "6-1 Solve Comparison Situations",
						"desc" : "4.OA.A.1, 4.OA.A.2, 4.NPT.B.5, MP.1, MP.2, MP.3, MP.4, MP.5, MP.6"
					}, {
						"title" : "6-2 Continue to Solve Comparison Situations",
						"desc" : "4.OA.A.1,  4.OA.A.2,4.NPT.B.5, 4.NPT.B.6, MP.1, MP.2, MP.3. MP.4"
					}, {
						"title" : "6-3 Solve Multi-Step Problems",
						"desc" : "4.OA.A.2, 4.OA.A.3, 4.NPT.B.5, 4.NPT.B.6,  MP.1, MP.4, MP.7, MP.8"
					}, {
						"title" : "6-4 Solve More Multi-Step Problems",
						"desc" : "4.OA.A.3, 4.OA.A.2, 4.NPT.B.5, 4.NPT.B.6, MP.1, MP.3, MP.4"
					}, {
						"title" : "6-5 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Make Sense and Persevere MP.1, Also MP.2, MP.4, MP.6, 4.OA.A.2, 4.OA.A.3, 4.NPT.B.5, 4.NPT.B.6 "
					}]
				}]
			}, {
				"id" : "4.OA.B",
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Gain familiarity with factors and mulitples",
				"color" : "blue",
				"topics" : [{
					"title" : "Topic 7: Factors and Multiples",
					"lessons" : [{
						"title" : "7-1 Understand Factors",
						"desc" : "4.OA.B.4, MP.2, MP.3, MP.5, MP.7"
					}, {
						"title" : "7-2 Factors",
						"desc" : "4.OA.B.4, MP.1, MP.2,  MP.3, MP.4, MP.5"
					}, {
						"title" : "7-3 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Repeated Reasoning MP.8, Also MP.1, MP.2, MP.3, MP.4, MP.6, 4.OA.B.4,  4.NBT.B.5"
					}, {
						"title" : "7-4 Prime and Composite Numbers",
						"desc" : "4.OA.B.4, MP.2, MP.3, MP.7, MP.8"
					}, {
						"title" : "7-5 Multiples",
						"desc" : " 4.OA.B.4, MP.2, MP.3, MP.7, MP.8"
					}]
				}]
			}, {
				"id" : "4.NF.A",
				"title" : "Number and Operations-Fractions",
				"desc" : "Extend understanding of fraction equivalence and ordering.",
				"color" : "green",
				"topics" : [{
					"title" : "Topic 8: Extend Understanding of Fraction Equivalence and Ordering",
					"lessons" : [{
						"title" : "8-1 Equivalent Fractions: Area Models",
						"desc" : "4.NF.A.1, MP.1, MP.2, MP.3. MP.5"
					}, {
						"title" : " 8-2 Equivalent Fractions: Number Lines",
						"desc" : "4.NF.A.1, MP.1, MP.3, MP.4. MP.5, MP.7"
					}, {
						"title" : "8-3 Generate Equivalent Fractions: Multiplication",
						"desc" : "4.NF.A.1, MP.2, MP.3. MP.4"
					}, {
						"title" : "8-4 Generate Equivalent Fractions: Division",
						"desc" : "4.NF.A.1, MP.1, MP.2, MP.3. MP.4, MP.6"
					}, {
						"title" : "8-5 Use Benchmarks to Compare Fractions",
						"desc" : "4.NF.A.1, 4.NF.A.2, MP.1, MP.2, MP.3. MP.8"
					}, {
						"title" : "8-6 Compare Fractions",
						"desc" : "4.NF.A.1, 4.NF.A.2, MP.2, MP.3. MP.5"
					}, {
						"title" : "8-7 MATH PRACTICES AND PROBLEM SOLVING",
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
						"title" : "9-1 Model Addition of Fractions",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"title" : "9-2  Decompose Fractions",
						"desc" : "4.NF.B.3b, MP.2, MP.4, MP.5"
					}, {
						"title" : "9-3 Add Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, 4.NF.B.3d, MP.1,  MP.3, MP.4, MP.7"
					}, {
						"title" : "9-4 Model Subtraction of Fractions",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.4, MP.5, MP.6"
					}, {
						"title" : "9-5 Subtract  Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, 4.NF.B.3d, MP.2, MP.3, MP.4"
					}, {
						"title" : "9-6 Add and Subtract Fractions with Like Denominators",
						"desc" : "4.NF.B.3a, MP.2, MP.4, MP.5"
					}, {
						"title" : "9-7 Estimate Fraction Sums and Differences",
						"desc" : "4.NF.B.3a, MP.1, MP.2, MP.3, MP.4, MP.8"
					}, {
						"title" : "9-8 Model Addition and Subtraction of Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.2, MP.3, MP.5"
					}, {
						"title" : "9-9 Add Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.1, MP.2, MP.3, MP.8"
					}, {
						"title" : "9-10 Subtract Mixed Numbers",
						"desc" : "4.NF.B.3c, MP.1, MP.2, MP.3, MP.8"
					}, {
						"title" : "9-11  MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Model with Math MP.4, Also MP.1, MP.2, MP.5, 4.NF.A.3d, 4.NF.B.3a,"
					}]
				}, {
					"title" : "Topic 10: Extend Multiplication Concepts to Fractions",
					"lessons" : [{
						"title" : "10-1 Fractions as Multiples  of Unit Fractions: Use Models",
						"desc" : "4.NF.B.4a, MP.2, MP.4, MP.7"
					}, {
						"title" : "10-2 Multiply a Fraction by a Whole Number: Use Models",
						"desc" : " 4.NF.B.4a, 4.NF.B.4b, 4.NF.B.4c, MP.2, MP.4, MP.7, MP.8"
					}, {
						"title" : "10-3 Multiply a Fraction by a Whole Number: Use Symbols",
						"desc" : "4.NF.B.4a,  4.NF.B.4b, 4.NF.B.4c, MP.2, MP.4, MP.7, MP.8"
					}, {
						"title" : "10-4 Multiply a Whole Number by a Mixed Number",
						"desc" : "4.NF.B.4c, MP.1, MP.3, MP.7"
					}, {
						"title" : "10-5 Solve Time Problems",
						"desc" : "4.MD.A.2, 4.NF.B.4c, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"title" : "10-6 MATH PRACTICES AND PROBLEM  SOLVING",
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
						"title" : "11-1 Read Line Plots",
						"desc" : "4.MD.B.4,  MP.2, MP.3, MP.6, MP.7"
					}, {
						"title" : "11-2 Make Line Plots",
						"desc" : "4.MD.B.4, 4.NF.A.1, MP.3, MP.6"
					}, {
						"title" : "11-3 Use Line Plots to Solve  Problems",
						"desc" : "4.MD.B.4, 4.NF.B.3d, MP.1, MP.5, MP.8"
					}, {
						"title" : "11-4 MATH PRACTICES AND PROBLEM SOLVING",
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
						"title" : "12-1 Fractions and Decimals",
						"desc" : "4.NF.C.6, MP.2, MP.3, MP.4"
					}, {
						"title" : "12-2 Fractions and  Decimals on the Number Line",
						"desc" : "4.NF.C.6, MP.1, MP.2, MP.4, MP.6, MP.7"
					}, {
						"title" : "12-3 Compare Decimals",
						"desc" : "4.NF.C.7, 4.MD.A.2, MP.2,  MP.3, MP.5"
					}, {
						"title" : "12-4 Add Fractions with Denominators of 10 and 100",
						"desc" : "4.NF.C.5, MP.1, MP.2, MP.3, MP.4, MP.5"
					}, {
						"title" : "12-5  Solve Word Problems Involving Money",
						"desc" : "4.MD.A.2, 4.NF.C.6, MP.1, MP.2, MP.4, MP.7, MP.8"
					}, {
						"title" : "12-6 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Look For and Use Structure MP.7, Also MP.1, MP.2, MP.3, MP.4, MP.6, 4.NF.C.7, 4.MD.A.2"
					}]
				}]
			}, {
				"id" : "4.MD.A",
				"title" : "Measurement and Data",
				"desc" : "A Solve problems involving measurement and conversion of measurements from a larger unit to a smaller unit.",
				"color" : "blue",
				"topics" : [{
					"title" : "Topic 13: Measurement: Find Equivalence in Units of Measure",
					"lessons" : [{
						"title" : "13-1 Equivalence with Customary Units of  Length",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.6, MP.7, MP.8"
					}, {
						"title" : "13-2 Equivalence with Customary Units of Capacity",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.6, MP.8"
					}, {
						"title" : "13-3 Equivalence with Customary Units of Weight",
						"desc" : "4.MD.A.1,  4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1, MP.2, MP.6, MP.8"
					}, {
						"title" : "13-4 Equivalence with Metric Units of Length",
						"desc" : "4.MD.A.1, 4.MD.A.2, MP.1,  MP.3, MP.5, MP.6, MP.8"
					}, {
						"title" : "13-5 Equivalence with Metric Units of Capacity and Mass",
						"desc" : "4.MD.A.1, 4.MD.A.2, 4.NF.B.3d, 4.NF.B.4c, MP.1,  MP.2, MP.6, MP.8"
					}, {
						"title" : "13-6 Solve Perimeter and Area Problems",
						"desc" : "4.MD.A.3, 4.MD.A.2, 4.NBT.B.5, 4.NF.B.4c, MP.1, MP.2, MP.3"
					}, {
						"title" : "13-7 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Precision MP.6, Also MP.1, MP.2, MP.4, 4.MD.A.2, 4.MD.A.3, 4.NBT.B.5, 4NBT.B.4"
					}]
				}]
			}, {
				"id" : "4.OA.C",
				"title" : "Operations and Algebraic Thinking",
				"desc" : "Generate and analyze patterns.",
				"color" : "yellow",
				"topics" : [{
					"title" : "Topic 14: Algebra: Generate and Analyze Patterns",
					"lessons" : [{
						"title" : " 14-1 Number Sequences",
						"desc" : "4.OA.C.5, MP.1, MP.2, MP.4, MP.5, MP.7, MP.8"
					}, {
						"title" : "14-2 Patterns: Number Rules",
						"desc" : "4.OA.C.5, MP.2, MP.7 "
					}, {
						"title" : "14-3 Patterns: Repeating Shapes",
						"desc" : "4.OA.C.5, MP.2, MP.3, MP.6, MP.7"
					}, {
						"title" : "14-4 MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Look For and Use Structure MP.7, Also MP.1, MP.2, 4.OA.C.5"
					}]
				}]
			}, {
				"id" : "4.MD.C",
				"title" : "Measurement and Data",
				"desc" : "Geometric measurement: understand concepts of angle and measure angles.",
				"color" : "yellow",
				"topics" : [{
					"title" : "Topic 15: Geometric Measurement: Understand Concepts of Angles and Angle Measurement",
					"lessons" : [{
						"title" : "15-1 Lines, Rays, and Angles",
						"desc" : "4.MD.C.5, 4.G.A.1, MP.2,  MP.4, MP.6, MP.7"
					}, {
						"title" : "15-2 Understand Angles and Unit Angles",
						"desc" : "4.MD.C.5a, MP.1, MP.2, MP.3, MP.4"
					}, {
						"title" : "15-3 Measure  with Unit Angles",
						"desc" : "4.MD.C.5a, 4.MD.C.5b, MP.1, MP.3, MP.4, MP.5, MP.8"
					}, {
						"title" : "15-4 Measure and Draw Angles",
						"desc" : "4.MD.C.6, MP.1,  MP.2, MP.3, MP.5, MP.6"
					}, {
						"title" : "15-5 Add and Subtract Angle Measures",
						"desc" : "4.MD.C.7, MP.1, MP.2, MP.3, MP.4, MP.7"
					}, {
						"title" : "15-6  MATH PRACTICES AND PROBLEM SOLVING",
						"desc" : "Use Appropriate Tools MP.5, Also MP.1, MP.2, MP.4, 4.MD.C.6, 4.MD.C.7"
					}]
				}]
			}, {
				"id" : "4.G.A",
				"title" : "Geometry",
				"desc" : "Draw and identify lines and angles, and classify shapes by properties of their lines and angles.",
				"color" : "yellow",
				"topics" : [{
					"title" : "Topic 16: Lines, Angles, and Shapes",
					"lessons" : [{
						"title" : "16-1 Lines",
						"desc" : " 4.G.A.1, MP.3, MP.4, MP.6"
					}, {
						"title" : "16-2 Classify Triangles",
						"desc" : "4.G.A.2, MP.3, MP.6, MP.8"
					}, {
						"title" : "16-3 Classify Quadrilaterals",
						"desc" : "4.G.A.2, MP.2, MP.3, MP.6, MP.7, MP.8"
					}, {
						"title" : "16-4 Line Symmetry",
						"desc" : "4.G.A.3, MP.2, MP.3, MP.5, MP.7"
					}, {
						"title" : "16-5  Draw Shapes with Line Symmetry",
						"desc" : "4.G.A.3, MP.1, MP.2, MP.3, MP.4"
					}, {
						"title" : "16-6 MATH PRACTICES AND PROBLEM SOLVING",
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
