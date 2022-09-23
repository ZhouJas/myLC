//Problems are the same as ones on NC150
import { Problem } from "./Problem";
import { Hardness } from "./Hardness";
const arrayHashing: Problem[] = [
    {
        title: "Contains Duplicate",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        title: "Valid Anagram",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/valid-anagram/"
    },
    {
        title: "Two Sum",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/two-sum/"
    },

    {
        title: "Group Anagrams",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/group-anagrams/"
    },
    {
        title: "Top K Frequent Elements",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
        title: "Product of Array Except Self",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
        title: "Valid Sudoku",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        title: "Encode and Decode Strings",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/encode-and-decode-strings/"
    },

    {
        title: "Longest Consecutive Sequence",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-consecutive-sequence/"
    }
]

const twoPointers: Problem[] = [
    {
        title: "Valid Palindrome",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/valid-palindrome/"
    }, {
        title: "Two Sum II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
    }, {
        title: "3Sum",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/3sum/"
    }, {
        title: "Container With Most Water",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/container-with-most-water/"
    }, {
        title: "Trapping Rain Water",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/trapping-rain-water/"
    },
]
const slidingWIndows: Problem[] = [
    {
        title: "Best Time to Buy & Sell Stock",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    }, {
        title: "Longest Substring Without Repeating Characters",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    }, {
        title: "Longest Repeating Character Replacement",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/"
    }, {
        title: "Permutation In String",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/permutation-in-string/"
    }, {
        title: "Minimum Window Substring",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/minimum-window-substring/"
    }, {
        title: "Sliding Window Maximum",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/sliding-window-maximum/"
    }
]
const stack: Problem[] = [
    {
        title: "Valid Parentheses",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        title: "Min Stack",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/min-stack/"
    }, {
        title: "Evaluate Reverse Polish Notation",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    }, {
        title: "Generate Parentheses",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/generate-parentheses/"
    }, {
        title: "Daily Temperatures",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/daily-temperatures/"
    }, {
        title: "Car Fleet",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/car-fleet/"
    }, {
        title: "Largest Rectangle In Histogram",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
]
const binarySearch: Problem[] = [
    {
        title: "Binary Search",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/binary-search/"
    }, {
        title: "Search a 2D Matrix",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/search-a-2d-matrix/"
    }, {
        title: "Koko Eating Bananas",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/koko-eating-bananas/"
    }, {
        title: "Search In Rotated Sorted Array",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    }, {
        title: "Find Minimum In Rotated Sorted Array",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    }, {
        title: "Time Based Key-Value Store",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/time-based-key-value-store/"
    }, {
        title: "Median of Two Sorted Arrays",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    },
]
const linkedList: Problem[] = [
    {
        title: "Reverse Linked List",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/reverse-linked-list/"
    }, {
        title: "Merge Two Sorted Lists",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/merge-two-sorted-lists/"
    }, {
        title: "Reorder List",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/reorder-list/"
    }, {
        title: "Remove Nth Node From End of List",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    }, {
        title: "Copy List with Random Pointer",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/copy-list-with-random-pointer/"
    }, {
        title: "Add Two Numbers",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/add-two-numbers/"
    }, {
        title: "Linked List Cycle",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/linked-list-cycle/"
    }, {
        title: "Find the Duplicate Number",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/find-the-duplicate-number/"
    }, {
        title: "LRU Cache",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/lru-cache/"
    }, {
        title: "Merge K Sorted Lists",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/merge-k-sorted-lists/"
    }, {
        title: "Reverse Nodes in K-Group",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
    },
]
const trees: Problem[] = [
    {
        title: "Invert Binary Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/invert-binary-tree/"
    }, {
        title: "Maximum Depth of Binary Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    }, {
        title: "Diameter of Binary Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/diameter-of-binary-tree/"
    }, {
        title: "Balanced Binary Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/balanced-binary-tree/"
    }, {
        title: "Same Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/same-tree/"
    }, {
        title: "Subtree of Another Tree",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/subtree-of-another-tree/"
    }, {
        title: "Lowest Commmon Ancestor of a BST",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
    }, {
        title: "Binary Tree Level Order Traversal",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    }, {
        title: "Binary Tree Right Side View",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/binary-tree-right-side-view/"
    }, {
        title: "Count Good Nodes in Binary Tree",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/"
    }, {
        title: "Validate Binary Search Tree",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/validate-binary-search-tree/"
    }, {
        title: "Kth Smallest Element in a BST",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
    }, {
        title: "Construct Tree from Preorder and Inorder Traversal",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
    }, {
        title: "Binary Tree Maximum Path Sum",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
    }, {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
    },
]
const tries: Problem[] = [
    {
        title: "Implement Trie",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/"
    }, {
        title: "Design Add and Search Word Data Structure",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/"
    }, {
        title: "Word Search II",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/word-search-ii/"
    },
]
const heap: Problem[] = [
    {
        title: "Kth Largest Element in a Stream",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
    }, {
        title: "Last Stone Weight",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/last-stone-weight/"
    }, {
        title: "K Closest Points to Origin",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/k-closest-points-to-origin/"
    }, {
        title: "Kth Largest Element in an Array",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/kth-largest-element-in-an-array/"
    }, {
        title: "Task Scheduler",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/task-scheduler/"
    }, {
        title: "Design Twitter",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/design-twitter/"
    }, {
        title: "Find Median from Data Stream",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/find-median-from-data-stream/"
    },
]
const backtracking: Problem[] = [
    {
        title: "Subsets",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/subsets/"
    }, {
        title: "Combination Sum",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/combination-sum/"
    }, {
        title: "Permutations",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/permutations/"
    }, {
        title: "Subsets II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/subsets-ii/"
    }, {
        title: "Combination Sum II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/combination-sum-ii/"
    }, {
        title: "Word Search",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/word-search/"
    }, {
        title: "Palindrome Partitioning",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/palindrome-partitioning/"
    }, {
        title: "Letter Combinations of a Phone Number",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
    }, {
        title: "N-Queens",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/n-queens/"
    },
]
const graphs: Problem[] = [
    {
        title: "Number of Islands",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/number-of-islands/"
    }, {
        title: "Clone Graph",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/clone-graph/"
    }, {
        title: "Max Area of Island",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/max-area-of-island/"
    }, {
        title: "Pacific Atlantic Waterflow",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/"
    }, {
        title: "Surrounded Regions",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/surrounded-regions/"
    }, {
        title: "Rotting Oranges",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/rotting-oranges/"
    }, {
        title: "Walls and Gates",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/walls-and-gates/"
    }, {
        title: "Course Schedule",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/course-schedule/"
    }, {
        title: "Course Schedule II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/course-schedule-ii/"
    }, {
        title: "Redundant Connection",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/redundant-connection/"
    }, {
        title: "Number of Connected Components in Graph",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
    }, {
        title: "Graph Valid Tree",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/graph-valid-tree/"
    }, {
        title: "Word Ladder",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/word-ladder/"
    },
]
const advancedGraphs: Problem[] = [
    {
        title: "Reconstruct Itinerary",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/reconstruct-itinerary/"
    }, {
        title: "Min Cost to Connect all Points",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/min-cost-to-connect-all-points/"
    }, {
        title: "Network Delay Time",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/network-delay-time/"
    }, {
        title: "Swim in Rising Water",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/swim-in-rising-water/"
    }, {
        title: "Alien Dictionary",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/alien-dictionary/"
    }, {
        title: "Cheapest Flights Within K Stops",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
    },
]
const dp1d: Problem[] = [
    {
        title: "Climbing Stairs",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/climbing-stairs/"
    }, {
        title: "Min Cost Climbing Stairs",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/min-cost-climbing-stairs/"
    }, {
        title: "House Robber",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/house-robber/"
    }, {
        title: "House Robber II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/house-robber-ii/"
    }, {
        title: "Longest Palindromic Substring",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-palindromic-substring/"
    }, {
        title: "Palindromic Substrings",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/palindromic-substrings/"
    }, {
        title: "Decode Ways",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/decode-ways/"
    }, {
        title: "Coin Change",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/coin-change/"
    }, {
        title: "Maximum Product Subarray",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/maximum-product-subarray/"
    }, {
        title: "Word Break",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/word-break/"
    }, {
        title: "Longest Increasing Subsequence",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-increasing-subsequence/"
    }, {
        title: "Partition Equal Subset Sum",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/partition-equal-subset-sum/"
    },
]
const dp2d: Problem[] = [
    {
        title: "Unique Paths",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/unique-paths/"
    }, {
        title: "Longest Common Subsequence",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/longest-common-subsequence/"
    }, {
        title: "Best Time to Buy/Sell Stock With Cooldown",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
    }, {
        title: "Coin Change II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/coin-change-2/"
    }, {
        title: "Target Sum",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/target-sum/"
    }, {
        title: "Interleaving String",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/interleaving-string/"
    }, {
        title: "Longest Increasing Path in a Matrix",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
    }, {
        title: "Distinct Subsequences",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/distinct-subsequences/"
    }, {
        title: "Edit Distance",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/edit-distance/"
    }, {
        title: "Burst Balloons",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/burst-balloons/"
    }, {
        title: "Regular Expression Matching",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/regular-expression-matching/"
    },
]
const greedy: Problem[] = [
    {
        title: "Maximum Subarray",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/maximum-subarray/"
    }, {
        title: "Jump Game",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/jump-game/"
    }, {
        title: "Jump Game II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/jump-game-ii/"
    }, {
        title: "Gas Station",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/gas-station/"
    }, {
        title: "Hand of Straights",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/hand-of-straights/"
    }, {
        title: "Merge Triplets to Form Target Triplet",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/"
    }, {
        title: "Partition Labels",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/partition-labels/"
    }, {
        title: "Valid Parenthesis String",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/valid-parenthesis-string/"
    },
]
const intervals: Problem[] = [
    {
        title: "Insert Interval",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/insert-interval/"
    }, {
        title: "Merge Intervals",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/merge-intervals/"
    }, {
        title: "Non-Overlapping Intervals",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/non-overlapping-intervals/"
    }, {
        title: "Meeting Rooms",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/meeting-rooms/"
    }, {
        title: "Meeting Rooms II",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/meeting-rooms-ii/"
    }, {
        title: "Minimum Interval to Include Each Query",
        difficulty: Hardness.Hard,
        link: "https://leetcode.com/problems/minimum-interval-to-include-each-query/"
    },
]
const math: Problem[] = [
    {
        title: "Rotate Image",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/rotate-image/"
    }, {
        title: "Spiral Matrix",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/spiral-matrix/"
    }, {
        title: "Set Matrix Zeroes",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/set-matrix-zeroes/"
    }, {
        title: "Happy Number",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/happy-number/"
    }, {
        title: "Plus One",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/plus-one/"
    }, {
        title: "Pow(x, n)",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/powx-n/"
    }, {
        title: "Multiply Strings",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/multiply-strings/"
    }, {
        title: "Detect Squares",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/detect-squares/"
    },
]
const bitmanip: Problem[] = [
    {
        title: "Single Number",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/single-number/"
    },
    {
        title: "Number of 1 Bits",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/number-of-1-bits/"
    }, {
        title: "Counting Bits",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/counting-bits/"
    }, {
        title: "Reverse Bits",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/reverse-bits/"
    }, {
        title: "Missing Number",
        difficulty: Hardness.Easy,
        link: "https://leetcode.com/problems/missing-number/"
    }, {
        title: "Sum of Two Integers",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/sum-of-two-integers/"
    }, {
        title: "Reverse Integer",
        difficulty: Hardness.Medium,
        link: "https://leetcode.com/problems/reverse-integer/"
    },
]

export const problems: Map<string, Problem[]>= new Map(
    [    ["1-D Dynamic Programming", dp1d],
    ["2-D Dynamic Programming", dp2d],
    ["Advanced Graphs", advancedGraphs],
    ["Arrays & Hashing", arrayHashing],
    ["Backtracking", backtracking],
    ["Binary Search", binarySearch],
    ["Bit Manipulation", bitmanip],
    ["Graphs", graphs],
    ["Greedy", greedy],
    ["Heap / Priority Queue", heap],
    ["Intervals", intervals],
    ["Linked List", linkedList],
    ["Math & Geometry", math],
    ["Sliding Window", slidingWIndows],
    ["Stack", stack],
    ["Trees", trees],
    ["Tries", tries],
    ["Two Pointers", twoPointers]]
)


export const categoryOrdering = [
    "Arrays & Hashing",
    "Two Pointers",
    "Sliding Window",
    "Stack",
    "Binary Search",
    "Linked List",
    "Trees",
    "Tries",
    "Heap / Priority Queue",
    "Backtracking",
    "Graphs",
    "Advanced Graphs",
    "1-D Dynamic Programming",
    "2-D Dynamic Programming",
    "Greedy",
    "Intervals",
    "Math & Geometry",
    "Bit Manipulation"
]
