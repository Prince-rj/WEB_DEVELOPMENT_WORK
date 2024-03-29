// { Driver Code Starts
#include <bits/stdc++.h>
#define MAX 20
using namespace std;

struct Node
{
	int data;
	Node* right, *down;
	
	Node(int x){
	    data = x;
	    right = NULL;
	    down = NULL;
	}
};

void display(Node* head)
{
    Node* Rp;
	Node* Dp = head;
	while (Dp) {
		Rp = Dp;
		while (Rp) {
			cout << Rp->data << " ";
			Rp = Rp->right;
		}
		
		Dp = Dp->down;
	}
}

Node* constructLinkedMatrix(int mat[MAX][MAX], int n);

// driver program
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        cin>>n;
        int mat[MAX][MAX];
        for(int i=0; i<n; i++)
            for(int j=0; j<n; j++)
                cin>>mat[i][j];
        Node* head = constructLinkedMatrix(mat, n);
        if(!head)cout<<"-1";
	    else display(head);
	    cout<<"\n";
    }
	return 0;
}

// } Driver Code Ends


/*structure of the node of the linked list is as

struct Node
{
	int data;
	Node* right, *down;
	
	Node(int x){
	    data = x;
	    right = NULL;
	    down = NULL;
	}
};
*/
// n is the size of the matrix
// function must return the pointer to the first element 
// of the in linked list i.e. that should be the element at arr[0][0]
Node* constructLinkedMatrix(int mat[MAX][MAX], int n)
{
    // code here
    struct Node *head=NULL;
    head=(struct Node *)malloc(sizeof(struct Node));
    struct Node *ptr1=NULL;
    struct Node *ptr2=NULL;
    
    ptr1=head;
    ptr2=head;
    1
    
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(mat[i][j]!=0){
            ptr1->data=mat[i][j];
            ptr1=ptr1->right;
            }
            else{
                ptr1=NULL;
            }
            if(mat[j][i]!=0){
            ptr2->data=mat[j][i];
            ptr2=ptr2->down;
            }
            else{
                ptr2=NULL;
            }
        };
    };
    // for(int i=0;i<MAX;i++){
    //     for(int j=0;j<MAX;j++){
    //         ptr1->data=mat[j][i];
    //         ptr1=ptr1->right;
            
    //     }
    // }
    return head;
}
