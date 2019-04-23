#include <stdbool.h>
#include <malloc.h>
#include <stdio.h>

typedef struct{
    int front;
    int rear;
    int *base;
    int maxSize;
} MyCircularQueue;

bool myCircularQueueIsFull(MyCircularQueue* obj);

bool myCircularQueueIsEmpty(MyCircularQueue* obj);

/** Initialize your data structure here. Set the size of the queue to be k. */
MyCircularQueue* myCircularQueueCreate(int k) {
    MyCircularQueue *myCircularQueue;
    
    myCircularQueue = malloc(sizeof(MyCircularQueue));
    if(myCircularQueue == NULL) return NULL;
    myCircularQueue->base=(int *)malloc((k+1)*sizeof(int));
    if(myCircularQueue->base == NULL) return NULL;
    myCircularQueue->front = myCircularQueue->rear = 0;
    myCircularQueue->maxSize = k+1;
    return myCircularQueue;
}


/** Insert an element into the circular queue. Return true if the operation is successful. */
bool myCircularQueueEnQueue(MyCircularQueue* obj, int value) {
    if (obj == NULL) return NULL;
    if(myCircularQueueIsFull(obj)) return false;
    obj->base[obj->rear]=value;
    obj->rear=(obj->rear+1)%(obj->maxSize);
    return true;
}

/** Delete an element from the circular queue. Return true if the operation is successful. */
bool myCircularQueueDeQueue(MyCircularQueue* obj) {
    if(obj == NULL) return false;
    if(myCircularQueueIsEmpty(obj)) return false;
    obj->front = ((obj->front)+1)%(obj->maxSize);
    return true;
}

/** Get the front item from the queue. */
int myCircularQueueFront(MyCircularQueue* obj) {
    if(obj == NULL) return NULL;
    if(myCircularQueueIsEmpty(obj)) return -1;
    return obj->base[obj->front];
}

/** Get the last item from the queue. */
int myCircularQueueRear(MyCircularQueue* obj) {
    if(obj == NULL) return -1;
    if(myCircularQueueIsEmpty(obj)) return -1;
    if((obj->rear) == 0) return obj->base[obj->maxSize-1];
    return obj->base[(obj->rear)-1];
}


/** Checks whether the circular queue is full or not. */
bool myCircularQueueIsFull(MyCircularQueue* obj) {
    if(obj == NULL) return NULL;
    if(((obj->rear+1)%(obj->maxSize)) == obj->front){
        return true;
    };
    return false;
}


/** Checks whether the circular queue is empty or not. */
bool myCircularQueueIsEmpty(MyCircularQueue* obj) {
    if(obj == NULL) return false;
    if(obj->front == obj->rear) return true;
    return false;
}


void myCircularQueueFree(MyCircularQueue* obj) {
   free(obj);
}

int main(){
    MyCircularQueue *obj =myCircularQueueCreate(3);
    bool param_1 = myCircularQueueEnQueue(obj, 1);
    printf("%d\n",param_1);
    bool param_2 = myCircularQueueEnQueue(obj, 2);
    printf("%d\n",param_2);
    bool param_3 = myCircularQueueEnQueue(obj, 3);
    printf("%d\n",param_3);
    printf("%d\n",myCircularQueueRear(obj));
    bool param_4 = myCircularQueueEnQueue(obj, 4);
    printf("bool:%d\n",param_4);
    bool d = myCircularQueueDeQueue(obj);
    printf("%d\n",d);
    printf("rear:%d\n", myCircularQueueRear(obj));

    bool f = myCircularQueueDeQueue(obj);
    printf("%d\n",f);
    printf("rear:%d\n", myCircularQueueRear(obj));
    return 0;
}


/**
 * Your MyCircularQueue struct will be instantiated and called as such:
 * struct MyCircularQueue* obj = myCircularQueueCreate(k);
 * bool param_1 = myCircularQueueEnQueue(obj, value);
 * bool param_2 = myCircularQueueDeQueue(obj);
 * int param_3 = myCircularQueueFront(obj);
 * int param_4 = myCircularQueueRear(obj);
 * bool param_5 = myCircularQueueIsEmpty(obj);
 * bool param_6 = myCircularQueueIsFull(obj);
 * myCircularQueueFree(obj);
 */